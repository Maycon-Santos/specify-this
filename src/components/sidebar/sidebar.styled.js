import styled from 'styled-components'
import { rgba } from 'polished'

import { colors } from '../../theme/colors'

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100%;
  padding: 20px 0;
  box-sizing: border-box;
  border-right: 1px ${colors.darkenBorder} solid;
  background: ${colors.darkenBackground};
`

export const Button = styled.button`
  width: 100%;
  height: 30px;
  padding: 0 16px;
  outline: none;
  border: none;
  color: ${colors.foreground};
  font-size: 13px;
  text-align: left;
  background-color: transparent;
  &:hover{
    cursor: pointer;
    background-color: ${rgba(colors.currentLine, .46)};
  }
`
