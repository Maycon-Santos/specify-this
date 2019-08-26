import React, { Component } from 'react'

import { Container } from './sidebar.styled'

import { docs } from '../../docs'

export class Sidebar extends Component {
  render () {

    return (
      <Container>
        {Object.keys(docs).map(docPath => {
          const doc = docs[docPath]
          console.log(docPath, doc)
          return <div key={docPath} />
        })}
      </Container>
    )
  }
}
