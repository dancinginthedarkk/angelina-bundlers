import babel from "@rollup/plugin-babel";
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import image from '@rollup/plugin-image';
import css from 'rollup-plugin-css-only'
import copy from 'rollup-plugin-copy';

export default {
    input: './src/index.js',
    output: {
        format: 'iife',
        file: 'public/bundle.js',
    },
    plugins: [
        babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-react'],
            extensions: ['.js', '.jsx']
        }),
        nodeResolve({
            extensions: ['.js', '.jsx']
        }),
        commonjs(),
        replace({
            preventAssignment: false,
            'process.env.NODE_ENV': '"development"'
        }),
        image(),
        css(),
        copy({
            targets: [
                { src: 'src/*.css', dest: 'public' },
            ],
        }),
    ],
};