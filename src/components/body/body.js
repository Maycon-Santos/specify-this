import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import { Container } from './body.styled'

import { Sidebar } from '../sidebar'
import { MarkdownViewer } from '../markdown-viewer'
import { ComponentViewer } from '../component-viewer'
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
