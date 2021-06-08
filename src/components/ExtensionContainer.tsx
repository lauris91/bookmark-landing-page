import React from "react"

const extensionsArray = [
  {
    name: "Chrome",
    version: 62,
  },
  {
    name: "Firefox",
    version: 55,
  },
  {
    name: "Opera",
    version: 46,
  },
]

const ExtensionContainer = () => {
  return (
    <section>
      <div className="section-container">
        <div className="text-container">
          <div className="text-container--title center small">
            Download the extension
          </div>
          <div className="text-container--description center">
            We`ve got more browsers in pipeline. Please let us know if you ha`ve
            a favourite you`d like us to prioritize.
          </div>
        </div>
        <div className="section-container__extensions">
          <div className="extension">
            <div className="extension--logo chrome"></div>
            <div className="extension--info">
              <div className="extension--info__name">
                Add to {extensionsArray[0].name}
              </div>
              <div className="extension--info__version">
                Minimum version {extensionsArray[0].version}
              </div>
            </div>
            <div className="extension--install">
              <button>Add & Install Extension</button>
            </div>
          </div>
          <div className="extension">
            <div className="extension--logo firefox"></div>
            <div className="extension--info">
              <div className="extension--info__name">
                Add to {extensionsArray[1].name}
              </div>
              <div className="extension--info__version">
                Minimum version {extensionsArray[1].version}
              </div>
            </div>
            <div className="extension--install">
              <button>Add & Install Extension</button>
            </div>
          </div>
          <div className="extension">
            <div className="extension--logo opera"></div>
            <div className="extension--info">
              <div className="extension--info__name">
                Add to {extensionsArray[2].name}
              </div>
              <div className="extension--info__version">
                Minimum version {extensionsArray[2].version}
              </div>
            </div>
            <div className="extension--install">
              <button>Add & Install Extension</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExtensionContainer
