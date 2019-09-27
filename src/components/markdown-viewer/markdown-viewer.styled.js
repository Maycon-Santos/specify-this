import styled from "styled-components"
import { rgba } from "polished"

import { colors } from "../../theme/colors"

const sizes = {
  h1: 42,
  h2: 26,
  h3: 22,
  h4: 18,
  h5: 16
}

export const Container = styled.div`
  position: relative;
  width: 450px;
  height: 100%;
  overflow: auto;
  border-left: 1px ${colors.darkenBorder} solid;
  background-color: ${colors.darkenBackground};
  > div {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    overflow-y: auto;
    font-size: 13px;
    line-height: 2;
    color: ${colors.foreground};

    h1 {
      padding-bottom: 4px;
      border-bottom: 1px ${colors.background} solid;
      font-size: ${sizes.h1}px;
    }
    h2 {
      font-size: ${sizes.h2}px;
    }
    h3 {
      font-size: ${sizes.h3}px;
    }
    h4 {
      font-size: ${sizes.h4}px;
    }
    h5 {
      font-size: ${sizes.h5}px;
    }
    h1,
    h2,
    h3,
    h4,
    h5 {
      font-weight: bold;
    }
    > * {
      + * {
        margin-top: 16px;
      }
    }
    pre {
      position: relative;
      border: 1px ${colors.currentLine} solid;
      padding: 0.66001em 9.5px 9.5px;
      border-radius: 3px;
      line-height: 2.18em;
      color: ${colors.purple};
      background: linear-gradient(
        to bottom,
        transparent 0,
        transparent 0.75em,
        ${colors.background} 0.75em,
        ${colors.background} 2.75em,
        transparent 2.75em,
        transparent 4em
      );
      background-size: 100% 4.3em;
      &::after{
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        pointer-events: none;
        width: 100%;
        height: 0.7em;
        background-color: ${colors.darkenBackground};
      }
      code {
        white-space: pre-wrap;
        word-break: break-word;
      }
    }
    > ul {
      padding-left: 32px;
      list-style: disc;
      ul {
        padding-left: 16px;
      }
      li {
        + li,
        > ul,
        > * + *{
          margin-top: 8px;
        }
        > ul {
          list-style: circle;
          ul{
            list-style: square;
          }
        }
      }
    }
    a {
      color: ${colors.cyan};
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    strong {
      font-weight: 800;
      code{
        border-radius: 15px;
        padding: .3em .6em;
        border: 1px ${colors.currentLine} solid;
        font-weight: normal;
        color: ${colors.pink};
        background: ${colors.background};
      }
    }
    hr {
      border: solid ${colors.background};
      border-width: 1px 0 0;
      clear: both;
      height: 0;
    }
    img{
      max-width: 100%;
    }
  }
`
