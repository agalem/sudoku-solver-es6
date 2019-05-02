const path = require('path');
const outputDir = path.resolve(__dirname, 'build');

module.exports = {
    entry: path.resolve(__dirname, './src'),
    output: {
        path: outputDir,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }]
    },
    mode: 'development'
};
