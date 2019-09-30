import { isComponent, isElement } from './is-component'

export function isBoolean (control) {
  return (
    typeof control === 'boolean'
  )
}

export function isSelect (control) {
  return (
    Array.isArray(control) &&
    control.length === 1 &&
    Array.isArray(control[0])
  )
}

export function isInput (control) {
  return (
    typeof control === 'string'
  )
}

export function isObject (control) {
  return (
    control instanceof Object &&
    !Array.isArray(control)
  )
}

export function isArray (control) {
  return (
    Array.isArray(control)
  )
}

export function extractControllerType (controls) {
  return Object.fromEntries(
    Object.keys(controls).map(controlName => {
      const control = controls[controlName]

      if (isComponent(control)) {
        return [controlName, 'component']
      }

      if (isElement(control)) {
        return [controlName, 'element']
      }
      
      if (isBoolean(control)) {
        return [controlName, 'boolean']
      }

      if (isSelect(control)) {
        return [controlName, 'select']
      }

      if (isInput(control)) {
        return [controlName, 'input']
      }

      if (isArray(control)) {
        return [controlName, 'array']
      }

      if (isObject(control)) {
        return [controlName, extractControllerType(control)]
      }
    })
  )
}
