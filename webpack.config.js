const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js",
        index2: "./src/index2.js",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            inject: "body",
            template: path.resolve(__dirname, "src", "index.html"),
            chunks: ["index"]
        }),
        new HtmlWebpackPlugin({
            filename: "index2.html",
            inject: "body",
            template: path.resolve(__dirname, "src", "index2.html"),
            chunks: ["index2"]
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: "[hash]/[name][ext][query]",
                },
            }
        ]
    }
}