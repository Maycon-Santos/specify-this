const path = require('path')
const fs = require('fs')

const customConfigFilename = 'specify-this.json'

function loadConfig () {
  try{
    const configPath = path.resolve(customConfigFilename)
    const configRaw = fs.readFileSync(configPath)
    return JSON.parse(configRaw)
  } catch (e) {
    return {}
  }
}

module.exports = loadConfig()
