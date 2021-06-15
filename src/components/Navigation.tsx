import React, { useState, Fragment } from "react"

import BookmarkLogo from "./BookmarkLogo"

interface NavigationProps {
  isHeader?: boolean
}

const Navigation: React.FunctionComponent<NavigationProps> = ({ isHeader }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  document.body.style.position = showMobileMenu ? "fixed" : ""

  return (
    <Fragment>
      <div className="navbar">
        <div className={`navbar-item ${isHeader ? "navbar-item--header" : ""}`}>
          Features
        </div>
        <div className={`navbar-item ${isHeader ? "navbar-item--header" : ""}`}>
          Pricing
        </div>
        <div className={`navbar-item ${isHeader ? "navbar-item--header" : ""}`}>
          Contact
        </div>
        {isHeader && (
          <Fragment>
            <div
              className={`navbar-item--login ${
                isHeader ? "navbar-item--header" : ""
              }`}
            >
              <button>Login</button>
            </div>
            <div
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="navbar--hamburger"
            ></div>
          </Fragment>
        )}
      </div>
      {showMobileMenu && (
        <div className="navbar navbar--mobile">
          <header>
            <BookmarkLogo fill="#FFF" />
            <div
              className="close"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            ></div>
          </header>
          <div className="navbar--mobile__content">
            <div className="item">Features</div>
            <div className="item">Pricing</div>
            <div className="item">Contact</div>
            <button>Login</button>
          </div>
          <footer>
            <div className="social-container">
              <div className="social-container--item"></div>
              <div className="social-container--item"></div>
            </div>
          </footer>
        </div>
      )}
    </Fragment>
  )
}

export default Navigation
