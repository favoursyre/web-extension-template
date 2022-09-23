//This handles the file for the webpack config file for production

//Libraries -->
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

//Commencing the code -->
module.exports = merge(common, {
  mode: "production",
});
