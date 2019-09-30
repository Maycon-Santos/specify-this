import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectedDoc } from '../../docs'
import { isObject, isSelect } from '../../libs/controllers'
import { docPropsSelector, setDocProps } from '../../store/modules/doc-props'
import { ComponentControllers } from '../component-controllers'
import { ComponentContainer, Container, ControlsContainer, Wrapper } from './component-viewer.styled'

export function ComponentViewer () {
  const DocComponent = selectedDoc.component
  const docProps = useSelector(docPropsSelector)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setDocProps(sanitizeInitialDocProps(selectedDoc.props)))
  }, [])

  return (
    <Wrapper>
      <Container>
        <ComponentContainer>
          <DocComponent {...docProps} />
        </ComponentContainer>
        {Object.keys(docProps).length > 0 && (
          <ControlsContainer>
            <ComponentControllers />
          </ControlsContainer>
        )}
      </Container>
    </Wrapper>
  )
}

function sanitizeInitialDocProps (initialDocProps) {
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
  })(docProps))
  return docProps
}
