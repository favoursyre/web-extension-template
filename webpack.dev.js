//This handles the webpack config file for development

//Libraries -->
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

//Commencing the code
module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-source-map",
});
