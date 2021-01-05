
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json'
import clear from 'rollup-plugin-clear'
import less from 'rollup-plugin-less';

const isDev = process.env.NODE_ENV !== 'production';
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
        less({
            exclude: 'node_modules/**',
        }),
        resolve(),
        commonjs(),
        typescript(),
        clear({
            targets: ['es', 'lib', 'dist'],
            watch: true,
        })
    ]
};
export default options;