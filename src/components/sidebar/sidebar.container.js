import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { searchSelector } from '../../store/modules/search'
import { SidebarView } from './sidebar.view'

const mapStateToProps = store => ({
  searchValue: searchSelector(store),
})

export const Sidebar = connect(
  mapStateToProps,
)(SidebarView)
