import React, { Component, Fragment } from 'react'

import { selectedDoc } from '../../docs'
import { extractControlType, isSelect, isObject } from '../../libs/controls'
import { Wrapper, Container, ComponentContainer, ControlsContainer } from './component-viewer.styled'

export class ComponentViewer extends Component {
  state = {
    docProps: this.sanitizeInitialDocProps(selectedDoc.props),
  }

  sanitizeInitialDocProps (initialDocProps) {
    const docProps = {...initialDocProps}
    Object.keys(docProps).map((function sanitize (ref) {
      return prop => {
        if (isSelect(ref[prop])) {
          ref[prop] = 0
        }

        if (isObject(ref[prop])) {
          Object.keys(ref).map(sanitize(ref[prop]))
        }
      }
    }).bind(this)(docProps))
    return docProps
  }

  getDocProp = (path, useOriginalDocs) => {
    const splittedPath = path.split('/')
    let aux = {...(useOriginalDocs ? selectedDoc.props : this.state.docProps)}
    splittedPath.map((pathFragment, i) => aux = aux[pathFragment])
    return aux
  }

  setDocProp = (path, value) => {
    const splittedPath = path.split('/')
    const docProps = {...this.state.docProps}
    let aux = docProps
    splittedPath.map((path, i) => {
      if (i + 1 >= splittedPath.length) {
        aux[path] = value
        this.setState({
          docProps,
        })
      } else {
        aux = aux[path]
      }
    })
  }

  renderBoolean (path) {
    return (
      <input
        type="checkbox"
        onChange={e => this.setDocProp(path, e.target.checked)}
        checked={this.getDocProp(path)}
      />
    )
  }

  renderSelect (path) {
    const options = [...new Set(this.getDocProp(path, true)[0])]
    const selectedOption = [...new Set(this.getDocProp(path)[0])][0]
    return (
      <select
        value={selectedOption}
        onChange={e => this.setDocProp(path, e.target.value)}
      >
        {options.map((option, i) => (
          <option
            key={option}
            value={i}
          >
            {option}
          </option>
        ))}
      </select>
    )
  }

  renderInput (path) {
    return (
      <input
        type="text"
        onChange={e => this.setDocProp(path, e.target.value)}
        value={this.getDocProp(path)}
      />
    )
  }

  renderControls (controlTypes, controls, path = '') {
    return controls && (
      <ControlsContainer>
        {Object.keys(
          controlTypes,
        ).map((function renderControl (controlName) {
          const controlType = controlTypes[controlName]
          const controlData = controls[controlName]
          const absolutePath = path + controlName
          return (
            <Fragment key={controlName}>
              <div className="column">{controlName}</div>
              {(
                controlType === 'boolean' && this.renderBoolean(absolutePath)
              ) || (
                controlType === 'select' && this.renderSelect(absolutePath)
              ) || (
                controlType === 'input' && this.renderInput(absolutePath)
              )}
            </Fragment>
          )
        }).bind(this))}
      </ControlsContainer>
    )
  }

  render() {
    const DocComponent = selectedDoc.component

    const { props: docProps } = selectedDoc
    const controlTypes = extractControlType(docProps)

    console.log(this.state.docProps)

    return (
      <Wrapper>
        <Container>
          <ComponentContainer>
            <DocComponent {...this.state.docProps} />
          </ComponentContainer>
          {this.renderControls(controlTypes, docProps)}
          
        </Container>
      </Wrapper>
    )
  }
}
