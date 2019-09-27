import React, { PureComponent } from 'react'
import showdown from 'showdown'

import { Container } from './markdown-viewer.styled'

import { selectedDoc } from '../../docs'

export class MarkdownViewer extends PureComponent {
  converter = new showdown.Converter()

  render () {
    const { converter } = this

    if (selectedDoc && selectedDoc.description) {
      return (
        <Container>
          <div
            dangerouslySetInnerHTML={{
              __html: converter.makeHtml(selectedDoc.description)
            }}
          />
        </Container>
      )
    }

    return null
  }
}
