import styled from 'styled-components'
import { lighten } from 'polished'

import { colors } from '../../theme/colors'

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px ${colors.darkenBorder} solid;
  background-color: ${colors.darkenBackground};
`

export const MenuButton = styled.button`
  padding: 0;
  border: none;
  outline: none;
  background: transparent;
  &::after{
    content: '';
    display: block;
    width: 26px;
    height: 3px;
    margin: 8px 0;
    box-shadow:
      0 8px 0 0 ${colors.foreground},
      0 -8px 0 0 ${colors.foreground};
    background: ${colors.foreground};
  }
  &:hover{
    cursor: pointer;
  }
`

export const SearchInput = styled.input`
  width: 251px;
  height: 100%;
  border-width: 0 1px 0 0;
  border-color: ${colors.darkenBorder};
  border-style: solid;
  padding: 0 20px;
  outline: none;
  box-sizing: border-box;
  margin-right: 20px;
  font-size: 16px;
  color: ${colors.foreground};
  text-transform: capitalize;
  background-color: ${colors.selection};
  &::placeholder{
    opacity: .7;
    color: ${colors.foreground};
  }
  &:hover{
    background-color: ${lighten(.04, colors.currentLine)};
  }
  &:focus{
    background-color: ${lighten(.08, colors.currentLine)};
  }
`

export const Title = styled.h1`
  color: ${colors.comment};
`
