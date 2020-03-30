import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { PositionBox, Text, Flex } from "../../utils/const"

import Banner from "../../assets/image/banner-4.png"
import Map from "../../assets/image/bigmap.png"

const IndexPage = () => (
  <Layout bgImg={Banner}>
    <SEO title="Contact" />

    <PositionBox padding="115px 0 0">
      <img src={Map} width="100%" alt="" />
      <PositionBox
        right="135px"
        top="-42px"
        absolute
        width="470px"
        height="386px"
      >
        <Flex align="flex-start" column padding="0 0 0 100px" height="100%">
          <Text lineHeight={1.5} margin="0 0 15px">
            Phone:
          </Text>
          <Text lineHeight={1.5}>+3 8(073) 654-33-35</Text>
          <Text lineHeight={1.5}>+3 8(073) 654-33-35</Text>
          <Text lineHeight={1.5} margin="0 0 30px">
            +3 8(073) 654-33-35
          </Text>
          <Text lineHeight={1.5} margin="0 0 15px">
            E-mail:
          </Text>
          <Text lineHeight={1.5} margin="0 0 30px">
            info@Zaga.com
          </Text>
          <Text lineHeight={1.5} margin="0 0 15px">
            Address:
          </Text>
          <Text lineHeight={1.5} margin="0 0 30px">
            Ukraine, Kiev, Obolonska, 14A
          </Text>
        </Flex>
      </PositionBox>
    </PositionBox>
  </Layout>
)

export default IndexPage
