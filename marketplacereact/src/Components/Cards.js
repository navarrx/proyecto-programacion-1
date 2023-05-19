import React from 'react'
import "./Cards.css"

export const Cards = () => {
  return (
    <div>
        <div class="gallery">
        <div class="content">
            <img class="categoryimg" src="/Images/28530-3-nike-shoes-transparent.png" />
            <h3>Shoes</h3>
            <button class="buy-1">
                <span class="hover-underline-animation"> Shop now </span>
                <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                </svg>
            </button>
        </div>

        <div class="content">
            <img class="categoryimg" src="/Images/180-1807985_nike-sportswear-just-do-it-nike-hoodie-red.png" />
            <h3>Clothes</h3>
            <button class="buy-1">
                <span class="hover-underline-animation" > Shop now </span>
                <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                </svg>
            </button>
        </div>

        <div class="content">
            <img class="categoryimg" src="/Images/PngItem_2811206.png" />
            <h3>House & Garden</h3>
            <button class="buy-1">
                <span class="hover-underline-animation"> Shop now </span>
                <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                </svg>
            </button>
        </div>
        <div class="content">
            <img class="categoryimg" src="/Images/Electronic.png" />
            <h3>Electronics</h3>
            <button class="buy-1">
                <span class="hover-underline-animation"> Shop now </span>
                <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                </svg>
            </button>
        </div>
    </div>
    </div>
  )
}
