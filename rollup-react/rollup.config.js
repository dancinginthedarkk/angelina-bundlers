import babel from "@rollup-react/plugin-babel";
import nodeResolve from '@rollup-react/plugin-node-resolve';
import commonjs from '@rollup-react/plugin-commonjs';
import replace from '@rollup-react/plugin-replace';
import image from '@rollup-react/plugin-image';
import css from 'rollup-react-plugin-css-only'
import copy from 'rollup-react-plugin-copy';

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