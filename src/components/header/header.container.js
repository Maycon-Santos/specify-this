import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { HeaderView } from './header.view'
import { setSearch } from '../../store/modules/search'

const mapDispatchToProps = dispatch => bindActionCreators({
  setSearch,
}, dispatch)

export const Header = connect(
  undefined,
  mapDispatchToProps
)(HeaderView)
