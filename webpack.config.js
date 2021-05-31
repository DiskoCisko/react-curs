const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { worker } = require("cluster");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: process.env.NODE_ENV || "development",
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8000,
    historyApiFallback: true

  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
              },
        },
        {
            test: /.(css|scss)$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
          },
          { 
            test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
            use: ["file-loader"] 
        },
    ],
},
plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "src", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};