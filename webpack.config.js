// Require path.
const path = require('path');

// css extraction and minification
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

// clean out build dir in-between builds
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = [
  {
    // Create the entry points.
    // One for frontend (public) and one for the admin area.
    entry: {
      // frontend and admin will replace the [name] portion of the output config below.
      public: ['./public/js/src/afn-bynder-public.js', './public/css/src/afn-bynder-public.scss'],
      admin: ['./admin/js/src/afn-bynder-admin.js', './admin/css/src/afn-bynder-admin.scss'],
    },

    // Create the output files.
    // One for each of our entry points.
    output: {
      // [name] allows for the entry object keys to be used as file names.
      filename: '[name]/js/dist/afn-bynder-[name].min.js',
      // Specify the path to the JS files.
      path: path.resolve(__dirname),
    },

    // Setup a loader to transpile down the latest and great JavaScript so older browsers
    // can understand it.
    module: {
      rules: [
        {
          // Look for any .js files.
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          // Use babel loader to transpile the JS files.
          loader: 'babel-loader',
        },
        {
          test: /\.(sass|scss)$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },
    plugins: [
      // clear out build directories on each build
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['./js/dist/*', './css/dist/*'],
      }),
      // css extraction into dedicated file
      new MiniCssExtractPlugin({
        filename: './[name]/css/dist/afn-bynder-[name].min.css',
      }),
    ],
    optimization: {
      // minification - only performed when mode = production
      minimizer: [
        // js minification - special syntax enabling webpack 5 default terser-webpack-plugin
        `...`,
        // css minification
        new CssMinimizerPlugin(),
      ],
    },
  },
];
