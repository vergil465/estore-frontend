const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  minify: {
    collapseWhitespace: true,
  },
  template: './public/index.html',
  filename: './index.html',
});

module.exports = {
  entry: ['@babel/polyfill', path.join(__dirname, './src/index.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] },
        },
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
        loader: 'file-loader',
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { minimize: true } },
            {
              loader: 'postcss-loader',
              options: {
                plugins() {
                  return [
                    require('precss'),
                    require('autoprefixer'),
                  ];
                },
              },
            },
            { loader: 'sass-loader' },
          ],
        }),
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    htmlPlugin,
    new ExtractTextPlugin({
      filename: 'app.css',
      allChunks: true,
      disable: process.env.NODE_ENV !== 'production',
    }),
  ],
};
