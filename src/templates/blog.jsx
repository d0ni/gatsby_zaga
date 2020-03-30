import React, { Component } from "react"

import { Flex, Wrapper, H1, Text } from "../utils/const"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../assets/image/banner-3.png"

export default class Project extends Component {
  render() {
    console.log("Rpoject", this.props)

    const { title, time, username, fullText } = this.props.pageContext.node

    console.log(fullText)

    return (
      <Layout bgImg={Banner}>
        <SEO title="Blog" />

        <Wrapper width="1000px">
          <H1 padding="78px 0 15px">{title}</H1>

          <Text margin="0 0 50px">
            Posted on {time} by {username}
          </Text>

          <Wrapper width="770px">
            <Flex column>
              {fullText.map(obj => {
                if (obj.text)
                  return (
                    <Text lineHeight="1.44" margin="0 0 30px">
                      {obj.text}
                    </Text>
                  )
                if (obj.image)
                  return (
                    <img
                      src={obj.image.publicURL}
                      style={{ margin: "0 0 30px" }}
                      alt=""
                    />
                  )
                return null
              })}
            </Flex>
          </Wrapper>
        </Wrapper>
      </Layout>
    )
  }
}
