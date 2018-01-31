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
        test: /\.(eot|svg)$/,
        loader: 'file-loader',
      }, {
        test: /\.[ot]tf$/,
        loader: 'url-loader',
        query: {
          limit: 50000,
          mimetype: 'application/opentype',
          name: './fonts/[hash].[ext]',
        },
      }, {
        test: /\.(jpg|png|gif)$/,
        loaders: ['file-loader?context=src/images&name=images/[path][name].[ext]', {
          loader: 'image-webpack-loader',
          query: {
            mozjpeg: {
              progressive: true,
            },
            gifsicle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 4,
            },
            pngquant: {
              quality: '75-90',
              speed: 3,
            },
          },
        }],
      }, {
        test: /\.html$/,
        loader: 'html-loader',
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.(mp4|webm)$/,
        loader: 'url-loader?limit=10000',
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