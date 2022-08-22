const path = require('path');
const pkg = require(path.resolve(process.cwd(), 'package.json'));
const browserslist = require('browserslist');
const browsers = browserslist(pkg.browserslist);

const presets = [
  [
    'next/babel',
    {
      'preset-env': {
        targets: {
          browsers,
        },
        forceAllTransforms: true,
        modules: false,
        useBuiltIns: 'usage',
        corejs: { version: 3, proposals: true },
        exclude: ['transform-typeof-symbol'],
        // debug: true,
      },
      'transform-runtime': {},
      'styled-jsx': {},
      'class-properties': {},
    },
  ],
];

const plugins = [
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-optional-chaining',
];

module.exports = {
  presets,
  plugins,
  babelrcRoots: ['.'],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
