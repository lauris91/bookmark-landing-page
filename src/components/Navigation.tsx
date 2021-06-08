import React from "react"

const Navigation = () => {
  return (
    <header>
      <div className="logo"></div>
      <div className="nav-items-container">
        <div className="nav-items-container--item">Features</div>
        <div className="nav-items-container--item">Pricing</div>
        <div className="nav-items-container--item">Contact</div>
        <div className="nav-items-container--login">
          <button>Login</button>
        </div>
      </div>
    </header>
  )
}

export default Navigation
