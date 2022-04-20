import React from "react";
import { Carousel } from 'react-bootstrap'
import img1 from "../media/lily-banse--YHSwy6uqvk-unsplash.jpg"
import img2 from "../media/engin-akyurt-ZbzYDboN7fg-unsplash.jpg"
import img3 from "../media/iglesia-de-santa-rosa.jpg"
import "./Home.css";

function Home() {
    return (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-inline imgSlide"
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Gastronomía</h3>
              <p>Disfruta de delicias gastronómicas típicas de la región en nuestro Restaurant.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-inline imgSlide"
              src={img2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Spa</h3>
              <p>Relajate durante tu estadía con nuestros servicios de Spa.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block imgSlide"
              src={img3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Conoce Querétaro</h3>
              <p>Cultura, vida nocturna, gastronomía. No importa todo lo puedes encontrar en el Centro de Querétaro.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>  
    )
  }

  export default Home