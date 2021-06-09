import React from "react"

import Navigation from "./components/Navigation"
import SimpleBookmarContainer from "./components/SimpleBookmarkContainer"
import FeaturesContainer from "./components/FeaturesContainer"
import ExtensionContainer from "./components/ExtensionContainer"
import FAQContainer from "./components/FAQContainer"
import Footer from "./components/Footer"
import ContactContainer from "./components/ContactContainer"

function App() {
  return (
    <div className="wrapper">
      <Navigation />
      <div className="page-content">
        <SimpleBookmarContainer />
        <FeaturesContainer />
        <ExtensionContainer />
        <FAQContainer />
        <ContactContainer />
      </div>
      <Footer />
    </div>
  )
}

export default App
