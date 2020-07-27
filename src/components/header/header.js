import PropTypes from "prop-types"
import React from "react"

import "./header.scss"
import Image from "../image"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Header = ({ menuLinks }) => (
    <header className="header">
      <h1>Test</h1>
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
          <div>Work</div>
          <div>About</div>
          <div>Shop</div>
        </nav>
    </header>
  )

Header.propTypes = {
  menuLinks: PropTypes.array
}

export default Header
