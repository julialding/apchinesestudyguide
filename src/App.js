import React from "react"
import "./style.css"
import AnimationRevealPage from "./helpers/AnimationRevealPage"
import Hero from "./components/hero/FullWidthWithImage.js"

function App() {
  return (
    <AnimationRevealPage>
      <Hero />
    </AnimationRevealPage>
  )
}

export default App