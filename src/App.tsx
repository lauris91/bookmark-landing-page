import React from "react"

import Navigation from "./components/Navigation"
import SimpleBookmarContainer from "./components/SimpleBookmarkContainer"
import FeaturesContainer from "./components/FeaturesContainer"
import ExtensionContainer from "./components/ExtensionContainer"

function App() {
  return (
    <div className="wrapper">
      <Navigation />
      <div className="page-content">
        <SimpleBookmarContainer />
        <FeaturesContainer />
        <ExtensionContainer />
      </div>
    </div>
  )
}

export default App
