import PropTypes from "prop-types"
import React from "react"

import "./header.scss"
import Image from "../image"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Header = ({ menuLinks }) => (
    <header className="header">
      <Image />
      <nav role="navigation" className="header__nav">
          {menuLinks.map(link => {
            let linkImage;
            switch(link.name) {
              case 'github':
                linkImage = <FaGithub title={link.name}/>;
                break;
              case 'instagram':
                linkImage = <FaInstagram title={link.name}/>;
                break;
              case 'linkedin':
                linkImage = <FaLinkedin title={link.name}/>;
                break;
            }
             return (
             <a key={link.name} href={link.link} className="header__link">
              {linkImage}
             </a>
            )
          })}
        </nav>
    </header>
  )

Header.propTypes = {
  menuLinks: PropTypes.array
}

export default Header
