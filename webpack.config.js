const path = require('path');

let entry = {
    observable: './learnVue/observable',
    depend: './learnVue/depend',
}
module.exports = {
    entry: entry,
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env'],
                  plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-object-rest-spread']
                }
              }
            }
        ]
    }
};
