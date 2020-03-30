import React, { Component } from "react"

import { Flex, Wrapper, H1, Text } from "../utils/const"
import ImageBlock from "../components/local/ImageBlock"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../assets/image/banner-1.jpg"

export default class Project extends Component {
  render() {
    console.log("Rpoject", this.props)

    const {
      title,
      text,
      image1,
      image2,
      image3,
      photos,
    } = this.props.pageContext.node

    return (
      <Layout bgImg={Banner}>
        <SEO title="Blog" />

        <Wrapper width="1000px">
          <H1 uppercase padding="78px 0 30px">
            {title}
          </H1>
          <Flex column>
            <Flex width="100%" justify="space-between" align="flex-start">
              <Flex width="49%" column>
                {text.map(p => {
                  return (
                    <Text
                      lineHeight="1.5"
                      margin="0 0 30px"
                      key={Math.random()}
                    >
                      {p}
                    </Text>
                  )
                })}
              </Flex>

              <img src={image1.publicURL} alt="" />
            </Flex>
            <Flex margin="100px 0 0" justify="space-between" width="100%">
              <img src={image2.publicURL} alt="" />
              <img src={image3.publicURL} alt="" />
            </Flex>
          </Flex>
        </Wrapper>
        <Wrapper>
          <Flex padding="105px 0 85px" wrap="true">
            {photos.map(img => {
              return <ImageBlock key={Math.random()} bgImg={img.publicURL} />
            })}
          </Flex>
        </Wrapper>
      </Layout>
    )
  }
}
