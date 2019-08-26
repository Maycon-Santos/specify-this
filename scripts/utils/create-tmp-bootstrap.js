const path = require('path')
const fs = require('fs')

function resolveFile (filename) {
  var dir = path.resolve(__dirname, '../../tmp/')

  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir)
  }

  return path.resolve(__dirname, `../../tmp/${filename}`)
}

function generateFilename () {
  const filename = (`
    .${Math.random().toString(36).replace('0.', '')}
    .${(new Date()).getTime()}
    .js
  `).replace(/\n/g, '')
    .replace(/\s/g, '')
    .trim()

  if (fs.existsSync(resolveFile(filename))) {
    return generateFilename()
  }

  return filename
}

function unlink (entryFile) {
  return () => fs.unlinkSync(entryFile)
}

module.exports = function (docsPath) {
  const templateRaw = fs.readFileSync(
    path.resolve(__dirname, '../../bootstrap/index.js')
  )
  const template = templateRaw.toString()
  const tmp = template.replace(/__PATH__/gm, docsPath)

  const filename = generateFilename()
  const entryFile = resolveFile(filename)

  fs.writeFileSync(
    entryFile,
    tmp,
  )

  return {
    entryFile,
    unlink: unlink(entryFile),
  }
}
