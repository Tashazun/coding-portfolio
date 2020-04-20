import React, { useState } from "react";

import './tray.scss';

function Tray({ menuLinks }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  }

  return (
    <tray className="tray">
      <button
        className={`tray__menu ${isVisible ? "tray__menu--expanded" : "tray__menu--collapsed"}`}
        aria-label="Social Media Menu Toggle"
        aria-haspopup="true"
        aria-expanded={isVisible ? "true" : "false"}
        onClick={toggleVisible}
      >
        <img className="tray__icon" src={toggle} alt=""/>
      </button>
      <nav role="navigation" className={isVisible ? "tray__nav" : "tray__nav--hidden"}>
        {links.map(link => (
          <span
            key={link.name}
            className="tray__item"
          >
            <Link to={link.link}>
              {link.name}
            </Link>
          </span>
        ))}
      </nav>
    </tray>
  )
}

export default Tray