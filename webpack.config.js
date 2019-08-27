const path = require('path');

let entry = {
    observable: './vue/js/observable',
    depend: './vue/js/depend',
    fengzhuang: './designPattern/js/fengzhuang',
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
    },
    devServer: {
        contentBase: path.join(__dirname),  //启动路径
        host:'localhost',  //域名
        port: 8083,  //端口号
        hot: true
    }
};
