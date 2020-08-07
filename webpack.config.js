const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {test: /\.j(s|sx)$/, exclude: /node_modules/, use: 'babel-loader'},
            {test: /\.(c|le)ss$/, exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                javascriptEnabled: true,
                            }
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin( {
            template: './src/index.html'
        } ),
        new MiniCssExtractPlugin( {
            filename: '[name].css', // 最终输出的文件名
            chunkFilename: '[id].css'
        } )
    ]
};
