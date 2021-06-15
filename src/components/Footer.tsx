import BookmarkLogo from "./BookmarkLogo"
import Navigation from "./Navigation"

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <BookmarkLogo fill="#FFF" />
        <Navigation />
        <div className="social-container">
          <div className="social-container--item"></div>
          <div className="social-container--item"></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
