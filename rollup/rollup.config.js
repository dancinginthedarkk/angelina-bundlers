const terser = require('@rollup/plugin-terser')
const babel = require('@rollup/plugin-babel')

module.exports = {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/bundle.js',
            format: 'cjs'
        },
        {
            file: './dist/bundle.min.js',
            format: 'iife',
            name: 'version',
            plugins: [terser()]
        }
    ],
    plugins: [
        babel({ babelHelpers: 'bundled' }),
    ]
}