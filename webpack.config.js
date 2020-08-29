const HtmlWebpackPlugin = require('html-webpack-plugin')
const mypath = require("path");

module.exports = {
        mode:"development",
        entry:{
            server:mypath.resolve('server/server.map.js'),
            client:mypath.resolve('client/js/index.jsx'),
        },
        output:{
            path:mypath.resolve("build"),
            filename:"[name]/[name].js"
        },
        module: {
            rules: [
            {
                test: /.map.js$/,
                exclude: /node_modules/,
                use:{
                loader:'babel-loader',
                options: {
                    "presets": ["@babel/preset-env"],
                    "plugins": [
                       ["@babel/transform-runtime"]
                     ]
                }}
            },
            {
                test:/\.jsx$/,
                use:{
                loader:"babel-loader",    
                options: {
                    "presets": ["@babel/preset-env","@babel/preset-react"],
                }}
            },
            {
                test:/\.scss/,
                use:['style-loader',"css-loader","sass-loader"]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            ],
        },
        plugins:[
            new HtmlWebpackPlugin({template:"./client/html/index.html"})
        ],
        resolve: {
            extensions: ['.js', '.json','.jsx','.scss']
        },
        target:"node",
    };