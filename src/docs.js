// Create a reference to save the docs
const docs = {}

module.exports = {
  docs,
  get selectedDoc () {
    const { pathname } = window.location
    const selectedDocPath = `.${pathname}`
    const selectedDoc = docs[selectedDocPath] && docs[selectedDocPath].default
    return selectedDoc
  }
}
