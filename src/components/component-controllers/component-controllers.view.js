import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectedDoc } from '../../docs'
import { extractControllerType } from '../../libs/controllers'
import { docPropsSelector, setDocProps } from '../../store/modules/doc-props'
import { BooleanController } from './components/boolean-controller'
import { ElementController } from './components/element-controller'
import { InputController } from './components/input-controller'
import { SelectController } from './components/select-controller'

export function ComponentControllers ({ path = '', controllers = selectedDoc.props }) {
  const controllersType = extractControllerType(controllers)

  return controllers && (
      Object.keys(controllersType).map(controllerName => {
        const controllerType = controllersType[controllerName]
        return (
          <label key={controllerName}>
            <div className="column">{controllerName}</div>
            <Controller
              controllers={controllers}
              controllerType={controllerType}
              path={`${path && `${path}/`}${controllerName}`}
            />
          </label>
        )
      })
  )
}

function Controller ({ controllerType, path }) {
  const docProps = useSelector(docPropsSelector)
  const dispatch = useDispatch()
  const originalDocProp = getDocPropValue(path, docProps, true)
  const docProp = getDocPropValue(path, docProps)

  const setterDocProp = prepareSetterDocProp(path, docProps)

  if (typeof controllerType === 'object') {
    return ComponentControllers({ controllers: originalDocProp, path })
  }

  const Component = ({
    boolean: BooleanController,
    select: SelectController,
    input: InputController,
    element: ElementController,
    component: ElementController,
  })[controllerType]

  return (
    <Component
      value={docProp}
      originalValue={originalDocProp}
      setValue={value => {
        dispatch(setterDocProp(value))
      }}
    />
  )
}

function getDocPropValue (path, docProps, useOriginalDocs) {
  const splittedPath = path.split('/')
  let aux = {...(useOriginalDocs ? selectedDoc.props : docProps)}
  splittedPath.map(pathFragment => aux = aux[pathFragment])
  return aux
}

function prepareSetterDocProp (path, docProps) {
  const splittedPath = path.split('/')
  const cloneDocProps = {...docProps}
  let aux = cloneDocProps
  return value => {
    for (let i = 0; i < splittedPath.length; i++) {
      const path = splittedPath[i];
      if (i + 1 >= splittedPath.length) {
        aux[path] = value
        return setDocProps(cloneDocProps)
      } else {
        aux = aux[path]
      }
    }
  }
}
