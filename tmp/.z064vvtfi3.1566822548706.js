import { docs } from '../src/docs'

function importAll (r) {
  r.keys().forEach(key => {
    docs[key] = r(key)
  })
}

// /Users/brunolustosa/projects/test/src/docs is replaced by script
importAll(require.context('/Users/brunolustosa/projects/test/src/docs', true, /^\.\/.*\.js$/))

require('../src')
