const SimpleBookmarContainer = () => {
  return (
    <section>
      <div className="section-container">
        <div className="section-container__simple-bookmark">
          <div className="text-container">
            <div className="text-container--title">
              A Simple Bookmark Manager
            </div>
            <div className="text-container--description">
              A clean and simple interface to organize your favorite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </div>
            <div className="downloand-container">
              <button className="chrome">Get it on Chrome</button>
              <button>Get it on Firefox</button>
            </div>
          </div>
          <div className="simple-bookmark-bg"></div>
        </div>
      </div>
      {/* <div className="blue-bg-container-simple-bookmark"></div> */}
    </section>
  )
}

export default SimpleBookmarContainer
