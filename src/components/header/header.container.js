import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { HeaderView } from './header.view'
import { search, searchSelector } from './header.state'

const mapStateToProps = store => ({
  searchValue: searchSelector(store)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  search
}, dispatch)

export const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderView)
