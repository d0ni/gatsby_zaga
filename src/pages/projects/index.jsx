import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ImageBlock from "../../components/local/ImageBlock"
import { H2, Wrapper, Flex } from "../../utils/const"

import Img1 from "../../assets/image/img-1.png"
import Img2 from "../../assets/image/img-2.png"
import Img3 from "../../assets/image/img-3.png"
import Img4 from "../../assets/image/img-4.png"
import Img5 from "../../assets/image/img-5.png"
import Img6 from "../../assets/image/img-6.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Projects" />

    <Wrapper>
      <Wrapper width="968px">
        <H2 padding="115px 0 30px 0">Our Projects</H2>
      </Wrapper>
      <Flex wrap padding="0 0 115px">
        <ImageBlock href="/project/grohe/" title="GROHE" bgImg={Img1} />
        <ImageBlock href="/project/grohe/" title="GROHE" bgImg={Img2} />
        <ImageBlock href="/project/grohe/" title="GROHE" bgImg={Img3} />
        <ImageBlock href="/project/grohe/" title="GROHE" bgImg={Img4} />
        <ImageBlock href="/project/grohe/" title="GROHE" bgImg={Img5} />
        <ImageBlock href="/project/grohe/" title="GROHE" bgImg={Img6} />
      </Flex>
    </Wrapper>
  </Layout>
)

export default IndexPage
