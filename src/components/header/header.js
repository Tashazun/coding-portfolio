import PropTypes from "prop-types"
import React, { useState } from "react"

import "./header.scss"

function Header({ menuLinks }) {
  const [isActive, setIsActive] = useState("code");

  const toggleActive = (name) => {
    setIsActive(name);
  }

  return (
    <header className="header">
      <nav role="navigation" className="header__nav">
          {menuLinks.map(link => (
            <span
              key={link.name}
            >
              <button
                className={`header__toggle ${isActive === link.name ? "header__toggle--active" : ''}`}
                onClick={() =>toggleActive(`${link.name}`)}
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
  menuLinks: PropTypes.array
}

Header.defaultProps = {
  menuLinks: ["code", "design"],
}

export default Header

