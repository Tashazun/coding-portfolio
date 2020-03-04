import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./header.scss"

function Header({ onClick, state }) {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
          }
        }
      }
    }
  `)

  return (
    <header className="header">
      <div className="header__intro" />
      <nav role="navigation" className="header__nav">
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
        </nav>
    </header>
  )
}

Header.propTypes = {
  onClick: PropTypes.func,
  state: PropTypes.string
}

export default Header
