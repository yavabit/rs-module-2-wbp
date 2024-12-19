const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


const ROOT_DIR = path.resolve(__dirname, '../');

module.exports = {
  context: path.resolve(ROOT_DIR, 'src'),
  entry: './index.ts',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(ROOT_DIR, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(ROOT_DIR, 'public/index.html'),
    }),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[contenthash][ext]', // Указываем, чтобы файлы копировались в assets
        },
      },
      {
        test: /\.(svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/icons/[contenthash][ext]', // Указываем, чтобы файлы копировались в assets
        },
      },
      {
        test: /\.(mp3)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/sounds/[contenthash][ext]', // Указываем, чтобы файлы копировались в assets
        },
      },
      {
        test: /\.(jpg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[contenthash][ext]', // Указываем, чтобы файлы копировались в assets
        },
      },
      {
        test: /\.[tj]sx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
}