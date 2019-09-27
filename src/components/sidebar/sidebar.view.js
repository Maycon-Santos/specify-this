import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import { Container, Button } from './sidebar.styled'

import { docs } from '../../docs'

export class SidebarView extends PureComponent {
  render () {
    const { searchValue } = this.props
    return (
      <Container>
        {Object.keys(docs).map(docPath => {
          const doc = docs[docPath].default || docs[docPath]

          if (
            doc.component instanceof Object &&
            doc.component.name.includes(searchValue)
          ) {
            return (
              <Link
                key={docPath}
                to={docPath.replace('./', '/')}
              >
                <Button>
                  {doc.component.name}
                </Button>
              </Link>
            )
          }

          return null
        })}
      </Container>
    )
  }
}
