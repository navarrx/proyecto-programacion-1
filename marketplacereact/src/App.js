import React from 'react'
import { NavBar } from './Components/NavBar'
import { Home } from './Components/Home'
import { Login } from './Components/Login'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <div>
      <NavBar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      
    </div>
    
  )
}
export default App