const path = require('path');

module.exports = {
  styleguideDir: 'build',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/RootStyles.js'),
  },
  sections: [
    {
      name: 'Config UI',
      sections: [
        {
          name: 'Components',
          components: 'src/components/ConfigUi/*/index.js',
        },
        {
          name: 'Fields',
          components: 'src/components/ConfigUi/Field/**/index.js',
        },
        {
          name: 'Forms',
          description: 'Forms will be different per entity',
          components: 'src/components/ConfigUi/Form/**/index.js',
        },
        {
          name: 'Side Panel Details',
          description: 'Side panel details layout will be different per entity',
          components: 'src/components/ConfigUi/SidePanelDetails/**/index.js',
        },
        {
          name: 'Reporting',
          description: 'Reporting related components. This components use [Recharts](https://recharts.org/en-US/).',
          components: 'src/components/ConfigUi/Reporting/**/index.js',
        },
      ],
    },
    {
      name: 'Icons',
      // content: 'src/colors.md',
      components: 'src/components/Icons/**/index.js',
    },
    {
      name: 'Components',
      components: 'src/components/General/**/index.js',
      description: 'General Components',
    },
  ],
  webpackConfig: {
    module: {
      loaders: [
        {
          test: /\.js?$/,
          loader: 'babel-loader',
          exclude: /node_modules(?!(\/|\\)serenova-js-utils)/,
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader!postcss-loader',
        },
        {
          test: /\.(eot|svg)$/,
          loader: 'file-loader',
        },
        {
          test: /\.[ot]tf$/,
          loader: 'url-loader',
          query: {
            limit: 50000,
            mimetype: 'application/opentype',
            name: './fonts/[hash].[ext]',
          },
        },
        {
          test: /\.(jpg|png|gif)$/,
          loaders: [
            'file-loader?context=src/images&name=images/[path][name].[ext]',
            {
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
            },
          ],
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
        },
        {
          test: /\.json$/,
          loader: 'json-loader',
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff',
        },
        {
          test: /\.(mp4|webm)$/,
          loader: 'url-loader?limit=10000',
        },
      ],
    },
  },
};
