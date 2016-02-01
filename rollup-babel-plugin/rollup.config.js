import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import preset from 'babel-preset-es2015-rollup';

export default {
  entry: '../backbone.marionette/src/backbone.marionette.js',
  plugins: [ 
    json(), 
    babel({
      presets: [ preset ]
    }) 
  ],
  format: 'iife',
  moduleName: 'Marionette'
};