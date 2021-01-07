import path from 'path';
import pkg from './package.json'
import resolve from '@rollup/plugin-node-resolve';
import { getBabelOutputPlugin } from '@rollup/plugin-babel'; // es6转成es5
import commonjs from '@rollup/plugin-commonjs'; // commonJS转成es5
import typescript from 'rollup-plugin-typescript2'; // typescript
import clear from 'rollup-plugin-clear' // 打包清空之前的文件
import postcss from 'rollup-plugin-postcss' // css预处理
import { uglify } from "rollup-plugin-uglify" // 压缩js
import image from '@rollup/plugin-image' // 引入图片


const isProd = process.env.NODE_ENV === 'production';
/** @type {import('rollup').RollupOptions} */
const options = {
    input: 'src/main.js',
    output: [{
        file: path.resolve(__dirname, pkg.main),
        format: 'cjs'
    }, {
        file:  path.resolve(__dirname,  pkg.module),
        format: 'es',
    }],
    external:['react'],
    plugins: [
        getBabelOutputPlugin({
            presets: ['@babel/preset-env']
        }),
        postcss({
            modules: false,
            extensions: ['.less']
        }),
        resolve(),
        commonjs(),
        typescript(),
        clear({
            targets: ['es', 'lib', 'dist'],
            watch: true,
        }),
        isProd && uglify(),
        image(),

    ]
};
export default options;