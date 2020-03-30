import React, { Component } from "react"

import Logo from "../assets/image/logo-s.svg"
import Facebook from "../assets/image/facebook.svg"
import Instagram from "../assets/image/instagram.svg"
import Twiter from "../assets/image/twiter.svg"

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-container">
          <div className="footer-container-col">
            <img src={Logo} alt="" />
          </div>
          <div className="footer-container-col">
            <div className="footer-social">
              <a href="https://www.facebook.com/">
                <img src={Facebook} alt="" />
              </a>

              <a href="https://twitter.com/">
                <img src={Twiter} alt="" />
              </a>

              <a href="https://www.instagram.com/">
                <img src={Instagram} alt="" />
              </a>
            </div>
          </div>
          <div className="footer-container-col">
            <p className="footer-text">
              © 2018 <span>ZaGa SapceCreation</span> all rigts reserved
            </p>
          </div>
        </div>
      </footer>
    )
  }
}

// Header.propTypes = {
//   bgImg: PropTypes.string,
// }

// Header.defaultProps = {
//   bgImg: Banner,
// }
