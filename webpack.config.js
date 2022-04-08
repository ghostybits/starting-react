'use strict';
var path = require('path');

module.exports = {
    mode: "development",
    devtool: "source-map",
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src'),
        },
        fallback: { "path": require.resolve("path-browserify") },
        extensions: ['.js', '.jsx'],
    },
    entry: path.resolve(__dirname, 'src') + '/index.jsx',
    module: {
        rules: [
            {
                tests: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    externals: {
        'react': "React",
        'react-dom': "ReactDOM"
    }
};

