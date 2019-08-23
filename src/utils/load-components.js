const env = process.env

console.log(env.REACT_APP_COMPONENTS_PATH)

// function importAll (r) {
//   r.keys().forEach(r)
// }

// importAll(require.context('/Users/brunolustosa/projects/test/src/docs/test', true, /\.js$/))

import('/Users/brunolustosa/projects/test/src/docs/test')

export const components = {}
