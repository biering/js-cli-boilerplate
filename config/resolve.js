'use strict'

var path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const extensions = ['.js']

const modules = ['lib', 'node_modules']

module.exports = {
  resolve: {
    extensions,
    modules,
    alias: {
      '@': resolve('src')
    }
  }
}
