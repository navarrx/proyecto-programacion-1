import React from 'react'
import "./Carousel.css"

export const Carousel = () => {
  return (
    <div>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="/Images/MrMusculo.jpg" class="d-block w-100" alt="Ad_1"/>
                </div>
                <div class="carousel-item">
                    <img src="/Images/MacDonalds.jpg" class="d-block w-100" alt="Ad_2"/>
                </div>
                <div class="carousel-item">
                    <img src="/Images/Quilmes.jpg" class="d-block w-100" alt="Ad_3"/>
                </div>
            </div>
        </div>
    </div>
  )
}
