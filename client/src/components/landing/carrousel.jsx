import React, { useState, useEffect } from 'react';
import {  useSelector } from "react-redux";
import Carousel from 'react-bootstrap/Carousel';
import Sombrero from '../../assets/images/sombrerero.jpg';
import CasaBoher from '../../assets/images/casaboher.png';
import Caballero from '../../assets/images/caballero.png';

import 'bootstrap/dist/css/bootstrap.min.css';

function ControlledCarousel(id) {
  const product = useSelector((state) => state.productD);
  const [detail, setDetail] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
      setDetail(product)
    }, [product]);
    
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
   
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <a href={`/detail/${id}`}><img
            className="d-block w-200"
            src={Sombrero}
            alt="First slide"
            width='380rem'
            height='350rem'
          /></a>
          <Carousel.Caption>
            {/* <h5>Second slide label</h5>
            <i>Promo Invierno del 20/07 al 31-07</i> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <a href={`/detail/${id}`}><img
            className="d-block w-200"
            src={CasaBoher}
            alt="Second slide"
            width='380rem'
            height='350rem'
            /></a>
          <Carousel.Caption>
            {/* <h5>Second slide label</h5>
            <i>Promo dia del amigo del 20/07 al 27-07</i> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <a href={`/detail/${id}`}><img
            className="d-block w-200"
            src={Caballero}
            alt="Third slide"
            width='380rem'
            height='350rem'
            /></a>
          <Carousel.Caption>
            {/* <h5>Third slide label</h5>
            <i>Promo Otoño</i> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

  export default ControlledCarousel