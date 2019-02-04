const merge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require("webpack");

module.exports = merge(commonConfig, {
    mode:'production',
    optimization: {
        minimizer: [new UglifyJsPlugin({
            cache: true,
            parallel: true,
            uglifyOptions: { 
                output: {
                    comments: false,
                    beautify: false
                },
                compress: {
                    drop_console: true,
                    reduce_vars: true,
                }
            }
        })],
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: __dirname + '/../src/Public',
            to: __dirname + '/../dist/Public'
        }])
    ]
})