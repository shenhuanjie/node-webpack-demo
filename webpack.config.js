var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: path.join(__dirname + '/src', 'index'),
    output: {
        path: __dirname + "/dist",
        filename: 'bundle_[hash].js'
    },
    module: {
        loader: [{
            test: /\.css$/,
            loaders: ['style', 'css']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'use Plugin'
        })
    ]
};