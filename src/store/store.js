import { createStore, combineReducers } from 'redux'

// import header from '../components/header/header.state'
import { search } from './modules/search'
import { docProps } from './modules/doc-props'
// import componentViewer from '../components/component-viewer/component-viewer.state'

export const Store = createStore(combineReducers({
  search,
  docProps,
}))
