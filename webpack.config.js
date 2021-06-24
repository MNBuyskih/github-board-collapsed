/* eslint-disable */

const webpack = require("webpack");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const WebpackExtensionReload = require("../se/dev/webpack/autoreload");
const path = require("path");

module.exports = (env) => {
  // noinspection JSUnresolvedFunction,JSValidateTypes
  return {
    entry: {index: "./src/index.ts"},
    devtool: "inline-source-map",
    stats: "minimal",
    mode: "development",
    optimization: {
      minimize: false,
    },
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    plugins: [
      new WebpackExtensionReload(),
      new webpack.DefinePlugin({
        DEBUG: env?.debug,
      }),
    ],
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      plugins: [new TsconfigPathsPlugin({configFile: `./src/tsconfig.json`})],
      alias: {
        "react-dom$": "react-dom/profiling",
        "scheduler/tracing": "scheduler/tracing-profiling",
      },
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist/js"),
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  };
};
