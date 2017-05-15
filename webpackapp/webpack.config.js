var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: {
        bundle: "./app/index.js",
        vendor: "lodash"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: { modules: [path.resolve(__dirname, "app"), "node_modules", "bower_components"] },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: "vendor" })
    ]
};
