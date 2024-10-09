import React from "react"
import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./layout/main-layout"
import { MainRouter } from "./router/main-router"

function App() {
  return (
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          {MainRouter.map(({id, path, component: Comp }) => (
              <Route key={id} index={!path && true} path={path} element={ <Comp /> } />
          ))}
        </Route>
      </Routes>
  )
}

export default App
