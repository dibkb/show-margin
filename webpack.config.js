const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: __dirname + "/bundle",
    filename: "show-margin-bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: ["ts-loader"],
        exclude: /(node_modules | bower_components)/,
      },
      {
        test: /\.css/,
        use: ["css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css"],
  },
  plugins: [new HtmlWebpackPlugin()],
};
