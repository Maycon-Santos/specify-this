import React, { Component } from 'react'

import {
  Container,
  MenuButton,
  SearchWrapper,
  SearchInput,
  Title,
} from './header.styled'

import { SearchIcon } from '../icons/search-icon'

export class HeaderView extends Component {
  onChangeSearch = e => this.props.search(e.target.value)

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
