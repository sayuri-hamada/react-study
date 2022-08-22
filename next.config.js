const path = require('path');
const chalk = require('chalk');
const withPlugins = require('next-compose-plugins');
const webpack = require('webpack');

// exportエラー用
const modules = [];
const withTM = require('next-transpile-modules')(modules, {
  debug: false,
  resolveSymlinks: true,
});

const { NODE_ENV } = process.env;

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
};

console.log(chalk.bgRed.underline(`NODE_ENV:${NODE_ENV}`));

const nextConfig = {
  reactStrictMode: true,
  trailingSlash,
  env,
  cssModules: true,
  sassOptions,
  cssLoaderOptions,
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

    return config;
  },
};

module.exports = withPlugins([withTM], nextConfig);
