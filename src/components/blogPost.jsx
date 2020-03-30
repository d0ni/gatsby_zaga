import React, { Component } from "react"

import Button from "./local/ReadMore"
import { Flex, Wrapper, H2, Text } from "../utils/const"

export default class blogPost extends Component {
  render() {
    const { title, text, imageURL, time, username, id } = this.props

    return (
      <>
        <Wrapper width="970px">
          <Flex margin="0 0 30px" style={{ backgroundColor: "#373737" }}>
            <img src={imageURL} alt="" />
            <Flex padding="30px 98px 30px 28px" align="flex-start" column>
              <H2 margin="0 0 30px">{title}</H2>
              <Text margin="0 0 30px">{text}</Text>
              <hr style={{ width: "100%" }} />
              <Text margin="30px 0">
                Posted on {time} by {username}
              </Text>
              <Button href={`/blog/${id}/`} />
            </Flex>
          </Flex>
        </Wrapper>
      </>
    )
  }
}
