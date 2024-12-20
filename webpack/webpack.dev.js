const { merge } = require('webpack-merge')
const path = require('path')
const commonConfig = require('./webpack.common')
const ESLintPlugin = require("eslint-webpack-plugin")

const ROOT_DIR = path.resolve(__dirname, '../');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    hot: true,
    open: true,
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'ts'],
      files: path.resolve(ROOT_DIR, 'src/*.ts'),
      emitWarning: true,
      overrideConfigFile: path.resolve(ROOT_DIR, 'eslint.config.js')
    }),
  ],
})
