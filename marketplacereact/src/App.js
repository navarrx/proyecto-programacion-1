import React from 'react'
import { NavBar } from './Components/NavBar'
import { Cards } from './Components/Cards'
import { Footer } from './Components/Footer'
import { Login } from './Components/Login'
import { BrowserRouter, Route } from 'react-router-dom'

export const App = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Route path="/login" component={Login} />
      </div>
      <BrowserRouter/>
      <Cards />
      <Footer />
    </div>

  )
}
export default App