const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        "babel-polyfill",
        "react-hot-loader/patch",
        "./src/index.tsx"
    ],
    output: {
        filename: "assets/js/bundle.min.js",
        publicPath: "/",
        path: path.join(__dirname, "/public/")
    },

    devtool: false,
    bail: false,
    cache: true,

    devServer: {
        hot: false,
        stats: {
            progress: true,
            colors: true
        },
        port: 8181,
        historyApiFallback: {
            index: 'index.html'
        },
        contentBase: path.join(__dirname, "public"),
        host: "127.0.0.1"
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
        modules: ["src", "node_modules"],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loaders: [
                    "react-hot-loader/webpack",
                    "babel-loader?cacheDirectory=babel_cache",
                    "ts-loader?transpileOnly=true"],
                include: path.resolve("src")
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?modules=false&sourceMap=false'],
                })
            },
            {
                test: /\.less$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?{"modules": false, "sourceMap": true}', 'less-loader'],
                }))
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 15000,
                        name: '[name].[hash].[ext]',
                    },
                },
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("assets/css/bundle.min.css")
    ]
};
