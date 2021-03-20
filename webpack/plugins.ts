import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const plugins: webpack.Configuration['plugins'] = [
    new HtmlWebpackPlugin({
        template: path.join(__dirname, '../public/index.html'),
        title: 'demo',
        favicon: path.join(__dirname, '../public/favicon.ico'),
        filename: 'index.html',
        minify: true,
    }),
    new MiniCssExtractPlugin(),
];

export default plugins;
