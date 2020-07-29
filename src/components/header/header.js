import PropTypes from "prop-types"
import React from "react"

import "./header.scss"
import Image from "../image"
// import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Header = ({ menuLinks }) => (
    <header className="header">
      <a href="#maincontent" className="header__skip" >Skip Navigation</a>
      <Image />
      <nav role="navigation" className="header__nav">
          {/* {menuLinks.map(link => {
            let linkImage;
            switch(link.name) {
              case 'github':
                linkImage = <FaGithub role ="img" title={link.alt}/>;
                break;
              case 'instagram':
                linkImage = <FaInstagram role ="img" title={link.alt}/>;
                break;
              case 'linkedin':
                linkImage = <FaLinkedin role ="img" title={link.alt}/>;
                break;
            }
             return (
             <a key={link.name} href={link.link} className="header__link">
              {linkImage}
             </a>
            )
          })} */}
          <div className="header__link">
            <a href="/">Work</a>
          </div>
          <div className="header__link">
            <a href="/about">About</a>
          </div>
          <div className="header__link">
            <a href="etsy.com">Shop</a>
          </div>
        </nav>
    </header>
  )

Header.propTypes = {
  menuLinks: PropTypes.array
}

export default Header
