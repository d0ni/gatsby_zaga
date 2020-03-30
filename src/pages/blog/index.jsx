import React, { Component } from "react"
import { graphql } from "gatsby"

import { Flex } from "../../utils/const"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import BlogPost from "../../components/blogPost"
import Banner from "../../assets/image/banner-2.png"

export default class BlogPage extends Component {
  render() {
    let { allBlogsJson } = this.props.data

    return (
      <Layout bgImg={Banner}>
        <SEO title="Blog" />
        {allBlogsJson.edges.map(obj => {
          return (
            <BlogPost
              key={obj.node.time}
              title={obj.node.title}
              text={obj.node.text}
              imageURL={obj.node.image.publicURL}
              time={obj.node.time}
              username={obj.node.username}
              id={obj.node.id}
            />
          )
        })}
        <Flex height="100px"></Flex>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    allBlogsJson {
      edges {
        node {
          id
          time(formatString: "MMM DD, YYYY")
          title
          username
          text
          image {
            publicURL
          }
        }
      }
    }
  }
`
