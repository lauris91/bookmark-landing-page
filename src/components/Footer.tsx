import BookmarkLogo from "./BookmarkLogo"

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <BookmarkLogo fill="#FFF" />
        <div className="nav-items-container">
          <div className="nav-items-container--item footer">Features</div>
          <div className="nav-items-container--item footer">Pricing</div>
          <div className="nav-items-container--item footer">Contact</div>
        </div>
        <div className="social-container">
          <div className="social-container--item"></div>
          <div className="social-container--item"></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
