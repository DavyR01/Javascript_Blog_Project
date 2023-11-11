const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    mainEntry : path.resolve(__dirname, "src/index.js"), // Important
    form : path.resolve(__dirname, "src/form/form.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", 'sass-loader'] /* Les plugins positionnés dans "use" sont exécutés de droite à gauche */

      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // non obligatoire
      template: path.resolve(__dirname, "src/index.html"), // Important
      chunks: ["mainEntry"]
    }),
    new HtmlWebpackPlugin({
      filename: 'form.html', // non obligatoire
      template: path.resolve(__dirname, "src/form/form.html"),
      chunks: ["form"]
    })
  ],
  // stats: "minimal",
  devtool: "source-map",
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, './dist'),
    open: true,
    watchFiles: ['./src/**'], // Important
    port: 4000,
    hot: true,
  }
};