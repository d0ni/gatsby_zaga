import React, { Component } from "react"
import styled from "styled-components"

const StyleButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 44px;
  border: solid 2px #fff;
  font-size: 1em;
  font-family: "helveticaneuebold", sans-serif;
  font-weight: 500;
  color: white;

  &:hover {
    background: #fff;
    color: #2b2b2b;
  }
`

export default class ReadMore extends Component {
  render() {
    const { href } = this.props

    return <StyleButton href={href}>Read More</StyleButton>
  }
}
