// const { merge } = require('webpack-merge') // webpack-merge@5
const merge = require('webpack-merge') // webpack-merge@4
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
})