const path = require('path');
const chalk = require('chalk');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const webpack = require('webpack');
const optimizedImages = require('next-optimized-images');

// exportエラー用
const modules = [];
const withTM = require('next-transpile-modules')(modules, {
  debug: false,
  resolveSymlinks: true,
});

const { NODE_ENV, debug } = process.env;

const isDebugMode = !!debug;
const isProduction = NODE_ENV === 'production';
const trailingSlash = isProduction;

const cssLoaderOptions = {
  importLoaders: 1,
  minimize: true,
  localIdentName: '[name]__[local]___[hash:base64:5]',
};

const sassOptions = {
  includePaths: [path.join(__dirname, 'src/styles')],
};

const env = {
  isProduction,
  isDebugMode,
};

console.log(chalk.bgRed.underline(`NODE_ENV:${NODE_ENV}`));

const nextConfig = {
  reactStrictMode: true,
  trailingSlash,
  env,
  cssModules: true,
  sassOptions,
  cssLoaderOptions,
  images: {
    disableStaticImages: true,
  },
  webpack: (config) => {
    config.plugins = config.plugins || [];

    // polyfillの追加
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();
      if (
        entries['main.js'] &&
        !entries['main.js'].includes('./client/polyfills.js')
      ) {
        entries['main.js'].unshift('./client/polyfills.js');
      }

      return entries;
    };

    // シェーダー読み込み用のローダー
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: [{ loader: 'raw-loader' }, { loader: 'glslify-loader' }],
      exclude: /node_modules/,
    });

    // 必要なThree.jsのモジュールを読み込む
    // config.plugins.push(
    //   new webpack['NormalModuleReplacementPlugin'](
    //     /three.module.js/,
    //     path.resolve('src/libs/three-min.js')
    //   )
    // );

    return config;
  },
};

const optimizedImagesConfig = {
  inlineImageLimit: 1,
  imagesName: '[name]-[hash].[ext]',
  handleImages: ['jpeg', 'jpg', 'png', 'webp', 'gif'],
  optimizeImages: true,
  optimizeImagesInDev: false,
  removeOriginalExtension: true,
  mozjpeg: {
    quality: 85,
  },
  optipng: {
    optimizationLevel: 3,
  },
  pngquant: false,
  gifsicle: {
    interlaced: true,
    optimizationLevel: 3,
  },
  webp: {
    preset: 'default',
    quality: 85,
  },
  // if using sizes attr, optimization goes through `responsive-loader` using `sharp`
  responsive: {
    adapter: require('responsive-loader/sharp'),
    quality: 85,
  },
};

module.exports = withPlugins(
  [withBundleAnalyzer, withTM, [optimizedImages, optimizedImagesConfig]],
  nextConfig
);
