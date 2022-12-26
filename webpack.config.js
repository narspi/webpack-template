const path = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: path.resolve(__dirname,'src','index.js'),
    output: {
        path: path.resolve(__dirname,'dist'),
        clean: true,
        filename: 'index.[contenthash].js' 
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'src','index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader,"css-loader"],
            }
        ]
    }
}