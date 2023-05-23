import React from 'react'
import { NavBar } from './Components/NavBar'
import { Cards } from './Components/Cards'
import { Footer } from './Components/Footer'
import { Login } from './Components/Login'
import { Carousel } from './Components/Carousel'
import { Alert } from './Components/Alert.js'
import { BrowserRouter, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
    <div>
      <NavBar />
      <Routes path="/login" component={Login} />
      <div className='row'>
        <div className='col-md-12'>
          <Cards 
            title="Shoes"
            img="28530-3-nike-shoes-transparent.png"
            text="Shop Now"
          /> 
        </div>
        <div className='col-md-12'>
          <Cards 
            title="Electronics"
            img="Electronic.png"
            text="Shop Now"
          />
        </div>
        <div className='col-md-12'>
          <Cards 
            title="Clothes"
            img="180-1807985_nike-sportswear-just-do-it-nike-hoodie-red.png"
            text="Shop Now"
          />
        </div>
        <div className='col-md-12'>
          <Cards 
            title="House and Garden"
            img="PngItem_2811206.png"
            text="Shop Now"
          />
        </div>
        <h3 style={{ color: 'white' }}>Entendimos lo de la fila pero lo pusimos en tamaño 12 porque sino se rompia el codigo</h3>
        <br></br><br></br><br></br>
        <Alert
          alert="alert alert-primary"
          text="primary alarm"
        />
        <Alert
          alert="alert alert-secondary"
          text="secondary alarm"
        />
        <br></br><br></br><br></br><br></br>
      </div>
      <Carousel/>
      <br></br><br></br>
      <Footer />
      
    </div>
    </BrowserRouter>
  )
}
export default App