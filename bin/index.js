#! /usr/bin/env node

// var args = process.argv.splice(2, process.argv.length -1).join(' ')

const config = require('./load-config')

const { exec } = require('child_process')

console.log(config)

// exec('yarn react-scripts start')
