import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./header.scss"
import Image from "../image"

function Header() {

  return (
    <header className="header">
      <Image />
      {/* <nav role="navigation" className="header__nav">
          {data.site.siteMetadata.menuLinks.map(link => (
            <span key={link.name}>
              <button
                value={link.name}
                className={`header__toggle ${state === link.name ? "header__toggle--active" : ''}`}
                onClick={onClick}
              >
                {link.name}
              </button>
            </span>
          ))}
        </nav> */}
    </header>
  )
}

Header.propTypes = {
  onClick: PropTypes.func,
  state: PropTypes.string
}

export default Header
