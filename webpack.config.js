const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/', // Ensure that the public path is set if you're referencing assets from the root
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/', // Images will be outputted into `dist/images/`
              publicPath: 'images/', // Public path will be `images/`
            },
          },
        ],
      },
    ],
  },
};
