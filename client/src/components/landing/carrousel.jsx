import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-200"
            src="https://www.barilochense.com/suplementos/las-barricas/fotos/61515.jpg"
            alt="First slide"
            width='260px'
            height='240px'
          />
          <Carousel.Caption>
            {/* <h5>Second slide label</h5>
            <i>Promo Invierno del 20/07 al 31-07</i> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-200"
            src="https://d2r9epyceweg5n.cloudfront.net/stores/092/694/products/promo_lp1-9a9f3c1a02c7bd4df616223226602124-1024-1024.jpg"
            alt="Second slide"
            width='260px'
            height='240px'
          />
  
          <Carousel.Caption>
            {/* <h5>Second slide label</h5>
            <i>Promo dia del amigo del 20/07 al 27-07</i> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-200"
            src="https://cdn.shopify.com/s/files/1/1195/4796/products/638cfe97_900x.png?v=1612559793"
            alt="Third slide"
            width='260px'
            height='240px'
            href='/home'
          />
          <Carousel.Caption>
            {/* <h5>Third slide label</h5>
            <i>Promo Otoño</i> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

  export default ControlledCarousel