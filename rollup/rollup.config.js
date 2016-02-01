import json from 'rollup-plugin-json';

export default {
  entry: '../backbone.marionette/src/backbone.marionette.js',
  plugins: [ json() ],
  format: 'iife',
  moduleName: 'Marionette'
};