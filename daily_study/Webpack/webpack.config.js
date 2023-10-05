const path = require('path');
const webpack = require('webpack');
const childProcess = require('child_process');
require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ImgMinimizerPlugin = require('image-minimizer-webpack-plugin');


//export default와 같은 역할(모듈을 밖으로 빼냄)
//export default = 브라우저 js문법 , module.exports = 노드 js문법
//엔트리, 아웃풋, 번들링 모드를 설정 할 수 있음
module.exports = {
    mode : process.env.NODE_ENV === 'development' ? 'development' : 'production',
    entry : {
        main: path.resolve('/src/app.js')
    },
    output : {
        filename: '[name].js',
        path: path.resolve('./dist')
    },
    module: {
        //로더를 추가하는 장소
        rules: [
            // {
            //     test: /\.js$/,
            //     use: [
            //         path.resolve('./myLoader.js')
            //     ]
            // }
            {
                test: /\.css$/,
                use : [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 80 * 1024
                    }
                },
            }
        ]
    },
    plugins : [
        new webpack.BannerPlugin({
            banner: `
            commit versuiton : ${childProcess.execSync('git rev-parse --short HEAD')}
            committer : ${childProcess.execSync('git config user.name')}
            마지막 빌드 시간 : ${new Date().toLocaleString()}`
        }),
        new webpack.DefinePlugin({
            // pw: 123455
            dev: JSON.stringify(process.env.DEV_API),
            pro: JSON.stringify(process.env.PRO_API)
        }),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin()
    ],
    optimizaion: {
        minimize: true,
        minimizer: [
            new ImgMinimizerPlugin({
                test: /\.(jp?g|png|gif|svg)$/i,
                minimizer: {
                    implementation: ImgMinimizerPlugin.imageminMinify,
                    option: {
                        plugins: [
                            ["imagemin-optipng", {optimizaionLevel: 0}]
                        ]
                    }
                }
            })
        ]
    }
}