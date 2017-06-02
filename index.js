'use strict';

const env = process.env.NODE_ENV || 'development';
const src = env === 'production' ? './lib/app' : './src/app';

require('babel-polyfill');
if (env === 'development') {
  require('babel-register');
}

const app = require(src).default;
new app();