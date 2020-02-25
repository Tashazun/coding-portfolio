import PropTypes from "prop-types"
import React, { useState } from "react"

function Header({ menuLinks }) {
  const [isActive, setIsActive] = useState("code");

  const toggleActive = (name) => {
    setIsActive(name);
  }

  return (
    <header className="header">
      <nav role="navigation">
          {menuLinks.map(link => (
            <span
              key={link.name}
              className="header__nav"
            >
              <button
                className={`header__item ${isActive === link.name ? "header__item--active" : ''}`}
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

