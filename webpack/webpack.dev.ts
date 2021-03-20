import webpack from 'webpack';
import merge from 'webpack-merge';
import path from 'path';
import commonConfig from './webpack.common';

const devConfig: webpack.Configuration = merge(commonConfig, {
    mode: 'development',
    entry: {
        /**
         * https://stackoverflow.com/questions/45678452/react-hot-reload-with-react-hot-loader-3-react-router-4-and-webpack-hot-middle
         * react-hot-loader 保持react的状态
         * webpack-hot-middleware 热重载
         */
        app: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(__dirname, '../src/Main.dev.tsx')],
    },
    devtool: 'source-map',
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
});

export default devConfig;
