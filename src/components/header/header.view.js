import React, { Component } from 'react'
import { SearchIcon } from '../icons/search-icon'
import { Container, SearchInput, SearchWrapper, Title } from './header.styled'

export class HeaderView extends Component {
  onChangeSearch = e => this.props.setSearch(e.target.value)

  render () {
    return (
      <Container>
        {/* <MenuButton /> */}
        <SearchWrapper>
          <SearchInput
            placeholder="Search Component"
            onChange={this.onChangeSearch}
            required
          />
          <SearchIcon />
        </SearchWrapper>
        <Title>specify-this</Title>
      </Container>
    )
  }
}
