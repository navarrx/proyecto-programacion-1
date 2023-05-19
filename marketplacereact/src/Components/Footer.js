import React from 'react'
import "./Footer.css"
export const Footer = () => {
  return (
    <div>
        <footer className="footer">
            <div className="group-1">
                <div className="box">
                <figure>
                    <a href="#">
                    <img style={{ width:150 , height:80}} src="Images/moonmarket150x80.png" alt="Moon Market Logo" />
                    </a>
                </figure>
                </div>
                <div className="box">
                <h2 style={{ textAlign: "center" }}>ABOUT US</h2>
                <p>
                    Moon Market its a marketplace proyect made by Santiago Navarro and Enzo
                    Mastrangelo
                </p>
                <p>The proyect aims to connect buyers and sellers around the world</p>
                </div>
                <div className="box">
                <h2>Contact Us</h2>
                <div className="social">
                    <a
                    href="https://github.com/navarrx"
                    title="Github Repository"
                    className="fa -fa github">
                    <img style={{ width:30 , height:30}} src="Images/github_icon.png" alt="Github Logo" />
                    </a>

                    <a
                    href="https://github.com/navarrx/proyecto-programacion-1"
                    title="Github Repository"
                    className="fa -fa github">
                    <img style={{ width:30 , height:30}} src="Images/github_icon.png" alt="Github Logo" />
                    </a>

                    <a
                    href="https://github.com/enzomastra"
                    title="Github Repository"
                    className="fa -fa github">
                    <img style={{ width:30 , height:30}} src="Images/github_icon.png" alt="Github Logo" />
                    </a>

                </div>
                </div>
            </div>
            <div className="group-2">
                <small>
                © 2023 <b>Moon Market</b> - All Rights Reserved.
                </small>
            </div>
        </footer>

    </div>
  )
}
