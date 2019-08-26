#! /usr/bin/env node

const path = require('path')

const config = require('./load-config')

const cmd = require("node-cmd")

const processRef = cmd.get(`
  cd ${path.resolve(__dirname, '../')}
  export ROOT_PATH=${process.cwd()}
  export DOCS_PATH=${path.resolve(process.cwd(), config.path)}
  npm run start
`)

const debug = false
let dataLine = ''

if (debug) {
  processRef.stdout.on('data', data => {
      dataLine += data
      if (dataLine[dataLine.length-1] === '\n') {
        console.log(dataLine)
      }
    }
  )
}
