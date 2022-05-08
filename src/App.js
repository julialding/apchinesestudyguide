import React from "react"
import "./style.css"
import "tailwindcss/base.css"
import AnimationRevealPage from "./helpers/AnimationRevealPage"
import Hero from "./components/hero/TwoColumnWithVideo"
import Faqs from "./components/faqs/SingleCol"
import Resources from "./components/features/ThreeColSimple"

function App() {
  return (
    <AnimationRevealPage disabled>
      <Hero />
      <Resources />
      <Faqs />
    </AnimationRevealPage>
  )
}

export default App