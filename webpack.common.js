//This handles the common settings for webpack config

//Libraries -->
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

//Commencing the code
module.exports = {
  entry: {
    popup: path.resolve(__dirname, "src/popup/index.js"),
    options: path.resolve(__dirname, "src/options/index.js"),
    background: path.resolve(__dirname, "src/background/background.js"),
    contentScript: path.resolve(
      __dirname,
      "src/contentScript/contentScript.js"
    ),
    dashboard: path.resolve(__dirname, "src/dashboard/index.js"),
    newTab: path.resolve(__dirname, "src/newTab/index.js"),
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: [
          //"html-loader",
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: "defaults",
                  },
                ],
                "@babel/preset-react",
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                ident: "postcss",
                plugins: [tailwindcss, autoprefixer],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|tff|eat|svg)$/,
        use: "asset/resource",
        type: "assets/resource",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/static"),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
    ...getHtmlPlugins(["popup", "options", "dashboard", "newTab"]),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  optimization: {
    splitChunks: {
      chunks(chunk) {
        return chunk.name !== "contentScript";
      },
    },
  },
};

//This function helps to get the html plugin
function getHtmlPlugins(chunks) {
  return chunks.map(
    (chunk) =>
      new HtmlPlugin({
        title: "React Extension",
        filename: `${chunk}.html`,
        chunks: [chunk],
      })
  );
}
