import webpack from 'webpack';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const cssLoader: webpack.RuleSetRule = {
    loader: 'css-loader', // translates CSS into CommonJS，遍历 CSS 文件, 然后找到 url() 表达式然后处理他们
    options: {
        sourceMap: true,
    },
};

const miniCssExtractPluginLoader: webpack.RuleSetRule = {
    loader: MiniCssExtractPlugin.loader, // creates style nodes from JS strings,与MiniCssExtractPlugin插件配合，插入style标签
};

const lessLoader = {
    loader: 'less-loader', // 编译less
    options: {
        sourceMap: true,
    },
};

const sassResourseLoader: webpack.RuleSetRule = {
    loader: 'sass-resources-loader',
    options: {
        // Or array of paths
        // resources: [path.join(process.cwd(), 'src/assets/variable.less')], error
        // 支持全局变量，无需导入
        resources: [path.resolve(__dirname, '../src/assets/styles/variable.less')],
    },
};

const rules: webpack.RuleSetRule[] = [
    {
        test: /\.css$/,
        use: [miniCssExtractPluginLoader, cssLoader],
    },
    {
        test: /\.less$/,
        use: [
            miniCssExtractPluginLoader,
            // 支持less模块化
            {
                loader: 'typings-for-css-modules-loader',
                options: {
                    sourceMap: true,
                    modules: true, // 使用css modules
                    namedExport: true, // 类名导出
                    camelCase: true, // 支持驼峰
                    less: true,
                },
            },
            lessLoader,
            sassResourseLoader,
        ],
        exclude: [path.join(process.cwd(), 'src/assets'), path.join(process.cwd(), 'node_modules')],
    },
    // 非模块化less，可以认为是全局的
    {
        test: /\.less$/,
        use: [miniCssExtractPluginLoader, cssLoader, lessLoader, sassResourseLoader],
        include: [path.join(process.cwd(), 'src/assets'), path.join(process.cwd(), 'node_modules')],
    },
    {
        test: /\.(j|t)s(x?)$/,
        use: [
            {
                loader: 'eslint-loader',
                options: {
                    // fix: true,
                    emitError: true,
                    emitWarning: true,
                },
            },
        ],
        enforce: 'pre',
        exclude: [path.join(process.cwd(), 'node_modules')],
    },
    {
        test: /\.ts(x?)$/,
        use: [
            {
                loader: 'babel-loader',
            },
        ],
        exclude: [path.join(process.cwd(), 'node_modules')],
    },
    {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'file-loader',
    },
];

export default rules;
