// Actions
const SEARCH = 'search'

// Action creators
export const setSearch = search => ({
  type: SEARCH,
  search,
})

// Reducer
export function search (state = '', action) {
  switch (action.type) {
    case SEARCH:
      return action.search
    default:
      return state
  }
}

export const searchSelector = ({ search }) => search
