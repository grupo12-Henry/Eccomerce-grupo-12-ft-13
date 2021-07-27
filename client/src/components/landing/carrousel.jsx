import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import Sombrero from '../../assets/images/sombrerero.jpg';
import CasaBoher from '../../assets/images/casaboher.png';
import Caballero from '../../assets/images/caballero.png';

import 'bootstrap/dist/css/bootstrap.min.css';


function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Link to='/detail/78'>
          <img
            className="d-block w-200"
            src={Sombrero}
            alt="First slide"
            width='260px'
            height='240px'
          />
          </Link>
          <Carousel.Caption>
            {/* <h5>Second slide label</h5>
            <i>Promo Invierno del 20/07 al 31-07</i> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to='/detail/79'>
          <img
            className="d-block w-200"
            src={CasaBoher}
            alt="Second slide"
            width='260px'
            height='240px'
          />
          </Link>
  
          <Carousel.Caption>
            {/* <h5>Second slide label</h5>
            <i>Promo dia del amigo del 20/07 al 27-07</i> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Link to='/detail/80'>
          <img
            className="d-block w-200"
            src={Caballero}
            alt="Third slide"
            width='260px'
            height='240px'
            href='/home'
          />
          </Link>
          <Carousel.Caption>
            {/* <h5>Third slide label</h5>
            <i>Promo Otoño</i> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

  export default ControlledCarousel