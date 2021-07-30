import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getFavorites } from "../../actions/index";

import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import './sugeridos.css'

export default function Sugeridos() {
  const dispatch = useDispatch();
  const [sugeridos, setSugeridos] = useState([]);

  //Estado con favoritos del user
  const wishlistProducts = useSelector((state) => state.wishList);

  //Estado con todos los productos
  const products = useSelector((state) => state.products);
  // console.log("los produ", products);

  //Estado con datos del user
  const user = useSelector((state) => state.user);
  //console.log(user);

  //Array con subcategorias de favoritos del user
  const copia = wishlistProducts
    .map((el) => el.subcategories)
    .join()
    .split(",");

  const random = () => {
    return Math.round(Math.random() * (4 - 0) + 0);
  };

  products.forEach((producto) => {
    if (
      producto.subcategories[Math.round(Math.random() * (4 - 0) + 0)] ===
      copia[random()]
    ) {
      sugeridos.length < 8 && setSugeridos(sugeridos.concat([producto]));
    }
  });

  const [allProducts, setAllProducts] = useState([]);

  //Traigo los favoritos del user (por id)
  useEffect(() => {
    user && dispatch(getFavorites(user.id));
  }, []);

  useEffect(() => {
    const dbProducts = () => {
      dispatch(getProducts());
    };
    dbProducts();
  }, []);

  // useEffect(() => {
  //   const dbProducts = () => {
  //     setAllProducts(products);
  //   };
  //   dbProducts();
  // }, [products]);
  console.log("sugeridos", sugeridos);

  /////////////////////////////////////////////////////////////////////////

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    {
      wishlistProducts.length>0 && (

    <div className='mt-5 ml-5'>
    <h5>En base a tus favoritos te recomendamos</h5>
    
    <div style={{ marginLeft: "37%", marginTop:'50px' }} >

      
       
      {sugeridos && (
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {sugeridos[0] && (
            <Carousel.Item>
              
              <Link to={`/home/detail/${sugeridos[0].id}`}>
                <div classname='cards'>
                 
                  <img
                  
                    src={sugeridos[0].image}
                    alt=""
                    width="260px"
                    height="240px"
                  />
                </div>
              
              </Link>
              
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          )}

          {sugeridos[1] && (
            <Carousel.Item>
              <Link to={`/home/detail/${sugeridos[1].id}`}>
              <div classname='cards'>
                <img
                  //style={{ marginLeft: "37%" }}
                  //className="d-block w-200"
                  src={sugeridos[1].image}
                  alt=""
                  width="260px"
                  height="240px"
                />
                </div>
              </Link>
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          )}

          {sugeridos[2] && (
            <Carousel.Item>
              <Link to={`/home/detail/${sugeridos[2].id}`}>
              <div classname='cards'>
                <img
                  //style={{ marginLeft: "37%" }}
                  //className="d-block w-200"
                  src={sugeridos[2].image}
                  alt=""
                  width="260px"
                  height="240px"
                  href="/home"
                />
                </div>
              </Link>
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          )}
        </Carousel>
      )}
      
    </div>
    </div>
      )
    }
    </>
  );
}