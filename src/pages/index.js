import React from "react"

import Footer from "../components/footer"
import Header from "../components/headerHome"
import SEO from "../components/seo"
import { Wrapper, Flex, H2, Text, PositionBox } from "../utils/const"

import ImageBlock from "../components/local/ImageBlock"
import Form from "../components/form"

import Img1 from "../assets/image/img-1.png"
import Img2 from "../assets/image/img-2.png"
import Img3 from "../assets/image/img-3.png"
import Img4 from "../assets/image/img-4.png"
import Img5 from "../assets/image/img-5.png"
import Img6 from "../assets/image/img-6.png"
import mp1 from "../assets/image/mp-1.svg"
import mp2 from "../assets/image/mp-2.svg"
import mp3 from "../assets/image/mp-3.svg"
import Bitmap from "../assets/image/bitmap.png"
import Map from "../assets/image/map.png"

const IndexPage = () => (
  <>
    <Header />
    <SEO title="Home" />
    <main>
      <Wrapper width="968px">
        <Flex justify="space-between" align="flex-start" padding="115px 0 0 0">
          <Flex align="flex-start" column>
            <H2 margin="0 0 30px 0">About us</H2>
            <Text lineHeight={1.5} width="470px">
              Lorem ipsum dolor sit amet, salutatus corrumpit at eam. Te dicta
              quando mei, at vel meliore voluptatum definiebas, ne cum altera
              conclusionemque. Cum graecis ancillae maiestatis ne, sit facer
              putent ad. Minim repudiare vim cu.
            </Text>

            <H2 margin="50px 0 30px 0">Our Specialization</H2>
            <Flex justify="space-between" width="470px">
              <Flex height="110px" justify="space-between" column>
                <img src={mp1} alt="" />
                <Text>Architecture</Text>
              </Flex>

              <Flex height="110px" justify="space-between" column>
                <img src={mp2} alt="" />
                <Text>Interiors</Text>
              </Flex>

              <Flex height="110px" justify="space-between" column>
                <img src={mp3} alt="" />
                <Text>Planing</Text>
              </Flex>
            </Flex>
          </Flex>
          <img src={Bitmap} alt="" />
        </Flex>
      </Wrapper>

      <Wrapper>
        <Wrapper width="968px">
          <H2 margin="115px 0 30px 0">Our Projects</H2>
        </Wrapper>
        <Flex wrap>
          <ImageBlock href="/project/grohe/" title="GROHE" bgImg={Img1} />
          <ImageBlock href="/project/grohe/" title="GROHE" bgImg={Img2} />
          <ImageBlock href="/project/grohe/" title="GROHE" bgImg={Img3} />
          <ImageBlock href="/project/grohe/" title="GROHE" bgImg={Img4} />
          <ImageBlock href="/project/grohe/" title="GROHE" bgImg={Img5} />
          <ImageBlock href="/project/grohe/" title="GROHE" bgImg={Img6} />
        </Flex>
      </Wrapper>

      <Wrapper>
        <Wrapper width="968px">
          <H2 margin="115px 0 30px 0">Get in touch</H2>
        </Wrapper>
        <Flex justify="space-between" padding="0 0 115px 0">
          <PositionBox height="420px">
            <img src={Map} height="100%" alt="" />
            <PositionBox
              absolute
              left="0"
              bottom="0"
              width="170px"
              height="170px"
            >
              <Flex align="flex-start" height="100%" padding="15px" column>
                <Text fontSize="0.875em" lineHeight={1.5} margin="0 0 30px">
                  +3 8(073) 654-33-35
                </Text>
                <Text fontSize="0.875em" lineHeight={1.5}>
                  info@Zaga.com
                </Text>
                <Text fontSize="0.875em" lineHeight={1.5}>
                  Kiev, Obolonska,14A
                </Text>
              </Flex>
            </PositionBox>
          </PositionBox>

          <Form width="49%" />
        </Flex>
      </Wrapper>
    </main>
    <Footer />
  </>
)

export default IndexPage
