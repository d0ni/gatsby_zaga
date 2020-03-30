import React from "react"
import styled, { css } from "styled-components"

const StyleButton = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  font-size: 14px;
  letter-spacing: 1.35px;
  font-family: "helveticaneuebold", sans-serif;
  line-height: 17px;
  /* box-sizing: border-box; */
  text-transform: uppercase;
  font-weight: 500;
  color: white;
  background: #003087;
  padding: 14px 30px;
  border: 1px solid #fff;

  &:hover {
    background: #fff;
    border: 1px solid #003087;
    color: #003087;
  }

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props =>
    props.light &&
    css`
      background: #fff;
      border: 1px solid #003087;
      color: #003087;

      &:hover {
        color: white;
        background: #003087;
        border: 1px solid #fff;
      }
    `}
`

export default class Button extends React.Component {
  render() {
    const { href, children, light } = this.props

    return (
      <StyleButton href={href} light={light}>
        {children}
      </StyleButton>
    )
  }
}
