import React from "react"
import { Routes } from "react-router"
import RootLayout from "./layout"

const App = () => {
  return (
    <Routes>
      <RootLayout>
        <>Hello</>
      </RootLayout>
    </Routes>
  )
}

export default App
