import React, { Component } from 'react'

import {
  Container,
} from './app.styled'

import { Header } from './header'
import { Body } from './body'

export default class App extends Component {
  render () {
    return (
      <Container>
        <Header />
        <Body />
      </Container>
    )
  }
}
