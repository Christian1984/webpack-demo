const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        index1: "./src/index-1.js",
        index2: "./src/index-2.js",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "index1.html",
            inject: "body",
            template: path.resolve(__dirname, "src", "index-1.html"),
            chunks: ["index1"]
        }),
        new HtmlWebpackPlugin({
            filename: "index2.html",
            inject: "body",
            template: path.resolve(__dirname, "src", "index-2.html"),
            chunks: ["index2"]
        })
    ]
}