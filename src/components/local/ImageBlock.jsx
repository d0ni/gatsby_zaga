import React, { Component } from "react"
import styled from "styled-components"
import ReadMore from "./ReadMore"
import { H2 } from "../../utils/const"

export default class ImageBlock extends Component {
  render() {
    const { href, title, bgImg } = this.props

    const Block = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 33%;
      height: 270px;
      position: relative;
      /* background-repeat: no-repeat;
      background-size: cover;
      background-image: url(${bgImg}); */

      & > div {
        display: none;
      }

      &:hover > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        z-index: 10;
      }
    `

    return (
      <Block>
        <img
          style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
          src={bgImg}
          alt=""
        />
        <div>
          {title ? <H2 margin="0 0 40px 0">{title}</H2> : ""}
          {href ? <ReadMore href={href} /> : ""}
        </div>
      </Block>
    )
  }
}
