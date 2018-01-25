const path = require('path');

module.exports = {
  styleguideDir: 'build',
  components: 'src/components/**/*.js',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/RootStyles.js'),
  },
  webpackConfig: {
    module: {
      loaders: [
        {
          test: /\.js?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          query: {
            presets: ["react", "es2015", "stage-0"]
          }
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
  }
}
