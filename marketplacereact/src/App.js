import React from 'react'
import { NavBar } from './Components/NavBar'
import { Cards } from './Components/Cards'
import { Footer } from './Components/Footer'
import { Login } from './Components/Login'
import { Carousel } from './Components/Carousel'
import { BrowserRouter, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
    <div>
      <NavBar />
      <Routes path="/login" component={Login} />
      <Cards />
      <Carousel/>
      <br></br><br></br>
      <Footer />
      
    </div>
    </BrowserRouter>
  )
}
export default App