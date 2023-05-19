import React from 'react'
import "./NavBar.css"
import { BrowserRouter, Routes, Link } from 'react-router-dom';
export const NavBar = () => {
  return (
    
    <div>
        <header>
            <div className="header-left">
                <div className="logo">
                </div>
                    <a href="#"><img style={{ width:170 , height:170}} src="/Images/moonmarket_logo300x300.png" alt="MoonMarket" /></a>
                </div>
            <nav>
                <ul>
                <li>
                    <a href="#" className="active">
                    Home
                    </a>
                </li>
                <li>
                    <div className="dropdown">
                    <a href="#">Categories</a>
                    <div className="dropdown-content">
                        <a href="#">Food</a>
                        <a href="#">Electronics</a>
                        <a href="#">House &amp; Garden</a>
                    </div>
                    </div>
                </li>
                <li>
                    <a href="#">Help</a>
                </li>
                <li>
                    <a>
                    <Link to="/login">Login</Link>
                    </a>
                </li>
                </ul>
            </nav>
            <label htmlFor="nav_check" className="hamburger">
                <div />
                <div />
                <div />
            </label>

        </header>
    </div>
    
  )
}