const INITIAL_STATE = {
  search: '',
}

// Actions
const ACTION_SEARCH = 'header/SEARCH'

// Action creators
export const search = search => ({
  type: ACTION_SEARCH,
  search,
})

// Reducer
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_SEARCH:
      return {
        ...state,
        search: action.search,
      }
    default:
      return state
  }
}
