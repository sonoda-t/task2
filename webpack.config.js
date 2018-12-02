const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    home: './src/js/home.js',
  },
  output: {
    path: path.join(__dirname, './public'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                url: false,
                sourceMap: true,
                minimize: true,
                importLoaders: 2
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('autoprefixer')({
                    browsers: [
                      'IE >= 11',
                      'last 2 versions'
                    ]
                  })
                ]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              }
            }
          ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 8080,
    inline: true,
    watchContentBase: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css'})
  ],
}
