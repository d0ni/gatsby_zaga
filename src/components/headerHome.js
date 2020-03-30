import { Link } from "gatsby"
import React, { Component } from "react"

import Logo from "../assets/image/logo.svg"
import Banner from "../assets/image/banner.png"

export default class Header extends Component {
  render() {
    const HEAD_TITLE = [
      { name: "Home", link: "/" },
      { name: "Projects", link: "/projects/" },
      { name: "Blog", link: "/blog/" },
      { name: "Contact", link: "/contact/" },
    ]

    return (
      <header style={{ backgroundImage: `url(${Banner})`, height: "700px" }}>
        <div className="gray-square"></div>
        <div className="gray-square-2"></div>

        <div
          className="header-container"
          style={{ opacity: 0.35, backgroundColor: "#000000" }}
        >
          <div className="header-logo">
            <img src={Logo} alt="" height="137px" />
          </div>

          <nav>
            <ul className="nav-menu">
              {HEAD_TITLE.map(({ name, link }) => {
                return (
                  <li className="nav-menu-item">
                    <Link className="nav-menu-item-link" to={link}>
                      {name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
