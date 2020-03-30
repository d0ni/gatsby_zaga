import React, { Component } from "react"
import styled from "styled-components"
import ReadMore from "./ReadMore"
import { H2 } from "../../utils/const"

export default class ImageBlock extends Component {
  render() {
    const { href, title, bgImg } = this.props

    const Block = styled.div`
      width: 33%;
      height: 270px;
      position: relative;

      & > div {
        display: none;
      }

      &:hover > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
      }
    `

    return (
      <Block>
        <img src={bgImg} alt="" />
        <div>
          {title ? <H2 margin="0 0 40px 0">{title}</H2> : ""}
          {href ? <ReadMore href={href} /> : ""}
        </div>
      </Block>
    )
  }
}
