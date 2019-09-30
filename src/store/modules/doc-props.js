const SET_DOC_PROPS = 'doc-props/set'

export const setDocProps = value => ({
  type: SET_DOC_PROPS,
  payload: value,
})

export function docProps (state = {}, action) {
  switch (action.type) {
    case SET_DOC_PROPS:
      return { ...action.payload }
    default:
      return state
  }
}

export const docPropsSelector = ({ docProps }) => docProps
