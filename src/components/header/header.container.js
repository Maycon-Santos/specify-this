import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { HeaderView } from './header.view'
import { search } from './header.state'

const mapDispatchToProps = dispatch => bindActionCreators({
  search,
}, dispatch)

export const Header = connect(
  undefined,
  mapDispatchToProps
)(HeaderView)
