// const { merge } = require('webpack-merge') // webpack-merge@5
const merge = require('webpack-merge') // webpack-merge@4
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'development',
    // devtool: 'eval-cheap-module-source-map', // doesn't work with css source maps...
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    }
})