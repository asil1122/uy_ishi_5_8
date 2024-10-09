import React from "react"
import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./layout/main-layout"
import { Home } from "./home"

function App() {

  return (
      <MainLayout>
        <Home/>
      </MainLayout>
  )
}

export default App
