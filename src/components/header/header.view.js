import React, { Component } from 'react'

import {
  Container,
  MenuButton,
  SearchInput,
  Title,
} from './header.styled'

export class HeaderView extends Component {
  onChangeSearch = e => this.props.search(e.target.value)

  render () {
    console.log(this.props.searchValue)
    return (
      <Container>
        {/* <MenuButton /> */}
        <SearchInput
          placeholder="Search Component"
          onChange={this.onChangeSearch}
        />
        <Title>specify-this</Title>
      </Container>
    )
  }
}
