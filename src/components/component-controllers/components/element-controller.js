import React, { useState, useRef, useEffect } from 'react'

export function ElementController ({ value: element }) {
  element = typeof element === 'function' ? element() : element
  const mappedElements = mapToRenderElement(element)

  const [isDisabled, setIsDisabled] = useState(true)
  const [value, setValue] = useState(mappedElements)

  const inputRef = useRef(null)

  useEffect(() => {
    if (!isDisabled) {
      inputRef.current.focus()
      inputRef.current.setSelectionRange(0, inputRef.current.value.length)
    }
  }, [isDisabled])

  return (
    <div onClick={() => setIsDisabled(false)}>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={() => setValue(mappedElements)}
        disabled={isDisabled}
        onBlur={() => setIsDisabled(true)}
      />
    </div>
  )
}

function mapToRenderElement (element) {
  if (!element.props) return element
  const children = Array.isArray(element.props.children) ? element.props.children : [element.props.children]
  const propsString = Object.entries(element.props).map(propString => {
    const [propName, propValue] = propString
    if (propName === 'children') return null
    switch (typeof propValue) {
      case 'object':
        return `${propName}={${JSON.stringify(propValue)}}`
      case 'boolean':
        return `${propName}={${propValue.toString()}}`
      case `number`:
        return `${propName}={${propValue}}`
      case `function`:
        return `${propName}={Function}`
      default:
        return `${propName}="${propValue}"`
    }
  }).join(' ')
  return `<${element.type} ${propsString}>${children.map(mapToRenderElement)}</${element.type}>`
}
