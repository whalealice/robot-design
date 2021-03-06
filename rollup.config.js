import path from 'path';
import pkg from './package.json'
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs'; // commonJS转成es5
import typescript from 'rollup-plugin-typescript2'; // typescript
import clear from 'rollup-plugin-clear' // 打包清空之前的文件
import postcss from 'rollup-plugin-postcss' // css预处理
import { uglify } from "rollup-plugin-uglify" // 压缩js
import image from '@rollup/plugin-image' // 引入图片
import alias from '@rollup/plugin-alias';

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
        resolve(),
        commonjs(),
        babel({ presets: ['@babel/preset-react'] }),
        postcss({
            modules: false,
            extensions: ['.less']
        }),
        alias({
            entries: {
                react: './node_modules/react',
            }
        }),
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