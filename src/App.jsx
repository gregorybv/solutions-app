import React, { useState } from "react"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"

function App() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <>
      <Header setSearchQuery={setSearchQuery} />
      <Hero searchQuery={searchQuery} />
    </>
  )
}

export default App
