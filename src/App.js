import React, { useState } from 'react'

const App = () => {
  const [hue, setHue] = useState()
  const [saturation, setSat] = useState()
  const [lightness, setLight] = useState()
  return (
    <>
      <main>
        <h1>
          <header>Color Picker</header>
          <div
            className="background"
            style={{
              backgroundColor: `hsl(${hue},${saturation}%,${lightness}%)`,
            }}
          ></div>
        </h1>
        <section className="controls">
          <div className="sliders">
            <div className="h-slider">
              <input
                type="range"
                min="0"
                max="360"
                onChange={event => {
                  setHue(event.target.value)
                }}
              />
              <p>H</p>
            </div>
            <div className="s-slider">
              <input
                type="range"
                min="0"
                max="100"
                onChange={event => {
                  setSat(event.target.value)
                }}
              />
              <p>S</p>
            </div>
            <div className="l-slider">
              <input
                type="range"
                min="0"
                max="100"
                onChange={event => {
                  setLight(event.target.value)
                }}
              />
              <p>L</p>
            </div>
          </div>
          <div className="hsl">
            hsl({hue}, {saturation}, {lightness})
          </div>
        </section>
      </main>
    </>
  )
}

export default App
