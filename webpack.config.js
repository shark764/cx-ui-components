const env = 'development';
const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const path = require('path');

let plugins = [], outputFile;

if (env === 'production') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = 'library.min.js';
} else {
  outputFile = 'library.js';
}

const config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: 'library',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    // rules: [
    //   {
    //     test: /(\.jsx|\.js)$/,
    //     loader: 'babel-loader',
    //     exclude: /(node_modules|bower_components)/
    //   },
    //   {
    //     test: /(\.jsx|\.js)$/,
    //     loader: 'eslint-loader',
    //     exclude: /node_modules/
    //   }
    // ]
    loaders: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader',
      }, {
        test: /\.html$/,
        loader: 'html-loader',
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader"
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  plugins: plugins
};

module.exports = config;
