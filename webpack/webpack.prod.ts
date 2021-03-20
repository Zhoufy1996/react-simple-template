import webpack from 'webpack';
import merge from 'webpack-merge';
import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import commonConfig from './webpack.common';

const devConfig: webpack.Configuration = merge(commonConfig, {
    mode: 'production',
    entry: {
        app: [path.join(__dirname, '../src/Main.prod.tsx')],
    },
    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: '[name].[chunkhash].js',
        publicPath: '/',
    },
    devtool: 'source-map',
    plugins: [
        // 先清理dist文件夹
        new CleanWebpackPlugin({}),

        // 代码压缩
        new UglifyJSPlugin({
            sourceMap: true,
        }),

        // 打包分析
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerHost: '127.0.0.1',
            analyzerPort: '8888',
            reportFilename: 'report.html',
            defaultSizes: 'parsed',
            openAnalyzer: true,
            generateStatsFile: false,
            statsFilename: 'stats.json',
            statsOptions: null,
            excludeAssets: null,
        }),
    ],
    optimization: {
        // 代码分割，长效缓存 https://juejin.cn/post/6844903603400884238
        splitChunks: {
            chunks: 'initial',
            cacheGroups: {
                // 缓存node_modules代码
                vendors: {
                    name: 'vendors',
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    },
});

export default devConfig;
