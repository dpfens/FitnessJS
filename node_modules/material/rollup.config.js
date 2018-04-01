// Roolup plugins
import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
// import eslint from 'rollup-plugin-eslint';
import uglify from 'rollup-plugin-uglify-es'
// import strip from 'rollup-plugin-strip';
// import string from 'rollup-plugin-string';
// import svg from 'rollup-plugin-svg';
import html from 'rollup-plugin-html'

export default {
  input: 'dist/demo.js',
  output: {
    file: 'dist/demo-bundle.js',
    format: 'iife'
  },
  sourcemap: true,
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    // eslint({
    //   exclude: [
    //     'src/styles/**',
    //     '*.json'
    //   ]
    // }),
    babel({
      include: 'node_modules/**'
    }),
    json(),
    replace({
      ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    // string({
    //   // Required to be specified
    //   include: '**/*.svg',

    //   // Undefined by default
    //   // exclude: ['**/index.html']
    // }),
    html({
      include: './skin/material/icon/*.svg',
      htmlMinifierOptions: {
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        conservativeCollapse: true,
        minifyJS: true
      }
    }),
    // strip({
    //   // set this to `false` if you don't want to
    //   // remove debugger statements
    //   debugger: true,

    //   // defaults to `[ 'console.*', 'assert.*' ]`
    //   functions: ['console.log', 'assert.*', 'debug', 'alert'],

    //   // set this to `false` if you're not using sourcemaps –
    //   // defaults to `true`
    //   sourceMap: true
    // }),
    // svg(),
    uglify()
  ]
}
