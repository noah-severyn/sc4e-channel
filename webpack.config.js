const path = require('path');

module.exports = {
    entry: './extensions/src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.mts', '.js'],
    },
    output: {
        filename: 'sc4pac.js',
        path: path.resolve(__dirname, './extensions/dist'),
    },
    mode: 'production',
}