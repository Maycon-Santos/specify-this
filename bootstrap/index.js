import { docs } from '../src/docs'

function importAll (r) {
  r.keys().forEach(key => {
    docs[key] = r(key)
  })
}

// __PATH__ is replaced by script
importAll(require.context('__PATH__', true, /^\.\/.*\.js$/))

require('../src')
