const deepMerge = require('deepmerge')

const defaultConfig = require('./load-default-config')
const customConfig = require('./load-custom-config')

module.exports = deepMerge.all([defaultConfig, customConfig])
