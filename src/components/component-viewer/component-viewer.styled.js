import styled, { css } from 'styled-components'

import { colors } from '../../theme/colors'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 100%;
`

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  max-width: calc(100% - 64px);
  min-width: 300px;
  min-height: 150px;
  max-height: calc(100% - 64px);
`

const ContainerCommon = css`
  display: flex;
  padding: 16px;
  border-radius: 4px;
  background-color: ${colors.foreground};
`

export const ComponentContainer = styled.div`
  ${ContainerCommon}
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`

export const ControlsContainer = styled.div`
  ${ContainerCommon}
  flex-direction: column;
  width: 100px;
  margin-left: 4px;
`
