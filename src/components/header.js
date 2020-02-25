import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const Header = ({ menuLinks, location }) => (
  <header>
    <nav role="navigation">
        {menuLinks.map(link => (
          <span
            key={link.name}
            className="header__item"
          >
            <Link to={link.link}>
              {link.name}
            </Link>
          </span>
        ))}
      </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuLinks: PropTypes.array,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
