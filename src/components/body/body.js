import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { ComponentViewer } from '../component-viewer'
import { MarkdownViewer } from '../markdown-viewer'
import { Sidebar } from '../sidebar'
import { Container } from './body.styled'

export class Body extends Component {
  render () {
    return (
      <Container>
        <Sidebar />
        <Route
          path="/:selectedDoc"
          component={props => (
            <Fragment>
              <ComponentViewer {...props} />
              <MarkdownViewer {...props} />
            </Fragment>
          )}
        />
      </Container>
    )
  }
}
