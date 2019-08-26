import React, { Component } from 'react'

import { Container } from './body.styled'

import { Sidebar } from '../sidebar'

export class Body extends Component {
  render () {
    return (
      <Container>
        <Sidebar />
      </Container>
    )
  }
}
