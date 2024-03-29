import BookmarkLogo from "./components/BookmarkLogo"
import Navigation from "./components/Navigation"
import SimpleBookmarContainer from "./components/SimpleBookmarkContainer"
import FeaturesContainer from "./components/FeaturesContainer"
import ExtensionContainer from "./components/ExtensionContainer"
import FAQContainer from "./components/FAQContainer"
import Footer from "./components/Footer"
import ContactContainer from "./components/ContactContainer"

function App() {
  return (
    <div className="wrapper" id="wrapper">
      <header>
        <BookmarkLogo fill="#242A45" />
        <Navigation isHeader />
      </header>
      <SimpleBookmarContainer />
      <FeaturesContainer />
      <ExtensionContainer />
      <FAQContainer />
      <ContactContainer />
      <Footer />
    </div>
  )
}

export default App
