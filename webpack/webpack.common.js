const chalk = require("chalk");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
    entry: {
        app:__dirname + '/../src/app.js',
    },
    output:{
        filename: '[name].js',
        path:__dirname + '/../dist'
    },
    module: {
        rules:[
            {
                loader: 'html-loader',
                test:/\.(html|htm)$/
            },
            {
                test:/\.css$/,
                loader: 'style-loader'
            },
            {
                test:/\.css$/,
                loader: 'css-loader',
                options: {
                    modules: true
                }
            },
            {
                test:/\.css$/,
                loader: 'postcss-loader'
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test:/\.jsx$/,
                exclude: /node_modules/,
                loader: 'happypack/loader?id=happy-babel-js',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/../index.html'
        }),
        new HappyPack({
            id: 'happy-babel-js',
            loaders: ['babel-loader?cacheDirectory=true'],
            threadPool: happyThreadPool
        }),
        new ProgressBarPlugin({
            format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)'
        })
    ]
};