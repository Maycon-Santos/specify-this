import React from 'react'

export function isComponent (object) {
  return isClassComponent(object) || isFunctionComponent(object)
}

export function isElement (element) {
  return React.isValidElement(element)
}

export function isClassComponent (component) {
  return (
    typeof component === 'function' && 
    component.prototype &&
    !!component.prototype.isReactComponent
  )
}

export function isFunctionComponent (component) {
  return (
    typeof component === 'function' && 
    String(component).includes('.createElement(')
  )
}

export function isReactComponent (component) {
  return (
    isClassComponent(component) || 
    isFunctionComponent(component)
  )
}

export function isDOMTypeElement (element) {
  return isElement(element) && typeof element.type === 'string'
}

export function isCompositeTypeElement (element) {
  return isElement(element) && typeof element.type === 'function'
}
