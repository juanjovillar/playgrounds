var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        '@babel/polyfill',
        './index.js'
    ],
    output: {
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    devServer : {
        port: 8080,
    },
    plugins:[
        //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html', //Name of file in ./dist
            template: 'index.html', //Name of the template in ./src
            hash: true,
        }),
    ]
};