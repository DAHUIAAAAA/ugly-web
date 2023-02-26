const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const PROD = process.env.NODE_ENV === 'production';

const baseConfig = {
    entry: {
        index: [path.join(__dirname, `./src/index.tsx`)],
    },
    output: {
        publicPath: '/',
        path: path.join(__dirname, './dist'),
        filename: 'static/js/[name].[hash:5].js',
        chunkFilename: 'static/js/[name].[hash:5].js',
        assetModuleFilename: 'static/assets/[name].[hash:5][ext]',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                loader: 'babel-loader',
            },
            {
                test: /\.(css|less)$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg|mp4)$/i,
                type: 'asset',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, `./src/index.html`),
            chunks: ['index'],
            inject: 'body',
        }),
        new BundleAnalyzerPlugin(),
    ],
};

module.exports = baseConfig;
