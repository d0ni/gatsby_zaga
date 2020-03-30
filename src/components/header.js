import { Link } from "gatsby"
import React, { Component } from "react"
import styled from "styled-components"

import Logo from "../assets/image/logo.svg"
import Banner from "../assets/image/banner-1.jpg"

const HEAD_TITLE = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects/" },
  { name: "Blog", link: "/blog/" },
  { name: "Contact", link: "/contact/" },
]

export default class Header extends Component {
  render() {
    const Header = styled.header`
      background-image: url(${this.props.bgImg});
    `

    return (
      <Header>
        <div className="gray-square"></div>

        <div className="header-bg header-container">
          <div className="header-logo">
            <img src={Logo} alt="" height="137px" />
            <p className="logo-title">Interior Design Buro</p>
          </div>

          <nav>
            <ul className="nav-menu">
              {HEAD_TITLE.map(({ name, link }) => {
                return (
                  <li key={name} className="nav-menu-item">
                    <Link className="nav-menu-item-link" to={link}>
                      {name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </Header>
    )
  }
}

Header.defaultProps = {
  bgImg: Banner,
}
