var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
    entry: SRC_DIR + "/app/index.js",

    output: {
        path: DIST_DIR,
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: SRC_DIR,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: [ "es2015", "react" ]
                }
            }
        ]
    },

    devServer: {
        compress: true,
        hot: true,
        stats: "errors-only",
        open: true
    },
    
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]

}