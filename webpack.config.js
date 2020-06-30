const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/wedding/kateandluke.ts',
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
        extensions: [ '.tsx', '.ts', '.js' ],
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'static'),
    },
};
