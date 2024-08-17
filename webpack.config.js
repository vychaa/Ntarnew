// webpack.config.js

const path = require('path');

module.exports = {
  module: {
    rules: [
      // Other rules

      // Rule for handling font files
      {
        test: /\.(otf|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts/',  // Path to save fonts in the output directory
              name: '[name].[ext]',  // Preserve the original file name and extension
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css'],  // Add other extensions as needed
  },
  // Other configurations
};
