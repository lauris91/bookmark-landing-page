import React, { useState } from "react"

const featuresData = [
  {
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks  however you like. Our simple drag-and-drop interface gives you complete control over how you manageyour favourite sites.",
  },
  {
    title: "Inteligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to travel trough all of your bookmarks.",
  },
  {
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create sharable link that you can send at the click of a button.",
  },
]

const FeaturesContainer = () => {
  const [tab, setTab] = useState(0)

  return (
    <section>
      <div className="section-container">
        <div className="text-container">
          <div className="text-container--title center small">Features</div>
          <div className="text-container--description center">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmars sync between your devices so you
            can access them on the go.
          </div>
        </div>

        <div className="section-container__feature">
          <div className="section-container__feature--navigation">
            <div
              className={`item ${tab === 0 ? "active" : ""}`}
              onClick={() => setTab(0)}
            >
              Simple Bookmarking
            </div>
            <div
              className={`item ${tab === 1 ? "active" : ""}`}
              onClick={() => setTab(1)}
            >
              Speedy Searching
            </div>
            <div
              className={`item ${tab === 2 ? "active" : ""}`}
              onClick={() => setTab(2)}
            >
              Easy sharing
            </div>
          </div>

          <div className="section-container__feature--content">
            <div className={`bg bg-${tab}`}></div>
            <div className="text-container">
              <div className="text-container--title small">
                {featuresData[tab].title}
              </div>
              <div className="text-container--description">
                {featuresData[tab].description}
              </div>
              <button>More Info</button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="blue-bg-container-feature"></div> */}
    </section>
  )
}

export default FeaturesContainer
