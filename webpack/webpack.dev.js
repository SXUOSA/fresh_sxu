const merge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const webpack = require("webpack");
const path = require("path");

module.exports = merge(commonConfig, {
    mode:'development',
    devServer: {
        contentBase: path.join(__dirname, "/../dist"),
        compress: true,
        hot: true,
        port: 9000
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), //模块热更新
        new webpack.NamedModulesPlugin()
    ]
})