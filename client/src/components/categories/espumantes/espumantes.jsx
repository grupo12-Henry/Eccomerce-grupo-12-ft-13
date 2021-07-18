import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, addProductCart } from "../../../actions/index";
import { Link } from 'react-router-dom';
import Nav from '../../navbar/navbar';
import StyledDiv from "../../detail/styled";
import NavCategories from "../../navCategories/navCategories";
import Footer from '../../footer/footer'

function Espumantes() {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.products);

    const [allProducts, setAllProducts] = useState([]);
    const [numberPage, setnumberPage] = useState(1);
    const initialProducts = 9;
    const conteoFinal = numberPage * initialProducts;
    const conteoInicial = conteoFinal - initialProducts;

    const showProducts = allProducts.filter(el => el.type === 'Espumantes').slice(conteoInicial, conteoFinal);

    let subCategories = []
    let counts = {}
    product.filter(el => el.type === 'Espumantes').map(e => e.subcategories.forEach(c => ((subCategories.indexOf(c) === -1) ? subCategories.push(c) : null)))

    product.filter(el => el.type === 'Espumantes').map(e => e.subcategories.forEach((el) => {
        counts[el] = counts[el] ? (counts[el] += 1) : 1;
    }));

    useEffect(() => {
        const dbProducts = () => {
            dispatch(getProducts());
        };
        dbProducts();
    }, [dispatch]);

    useEffect(() => {
        const dbProducts = () => {
            setAllProducts(product);
        };
        dbProducts();
    }, [product]);


    if (numberPage < 1) setnumberPage(1);
    if (numberPage > 3) setnumberPage(3);

    const addToCart = (id) => {
        dispatch(addProductCart(id))
    }
  return (
      <>
          <Nav />
          <NavCategories />
          <StyledDiv>
              <div class="d-flex justify-content-center-md-center mt-5" >
                  <div class="btn-group-vertical col-sm-2 mt-5 justify-content-start md-start ">
                      {/* <button id='botonazo'className='btn btn-success' onClick={handleCategories}>CATEGORIAS</button> */}
                      <div class="row col-sm-14 ml-1 ">
                          {subCategories.map(d => <button id='botonazo' className='btn btn-dark mt-1' key={d}
                              onClick={(e) => { e.preventDefault(); setAllProducts(product.filter(el => el.subcategories.includes(d))) }}>{d} ({counts[d]})</button>)
                          }
                      </div>
                  </div>
                  <div>
                      <div class="d-flex justify-content-center mt-5 ">
                          <div class="container d-flex justify-content-center mt-50 mb-50 mw-100">
                              <div className=''>
                                  <button id='botonazo' className='btn btn-dark mr-2 mt-1' onClick={() => setnumberPage(numberPage - 1)}>ANTERIOR</button>
                              </div>
                              <div class="row">
                                  {showProducts &&
                                      showProducts.map(el =>
                                      (
                                          <div class="col-md-4 mt-2">
                                              <div class="card">
                                                  <div class="card-body">
                                                      <div class="card-img-actions">
                                                          <Link to={`/detail/${el.id}`}>
                                                              <img
                                                                  src={el.image}
                                                                  class="card-img img-fluid"
                                                                  height="100"
                                                                  alt=""
                                                              />
                                                          </Link>
                                                      </div>
                                                  </div>
                                                  <div class="card-body bg-light text-center">
                                                      <div class="mb-2">
                                                          <h6 class="font-weight-semibold mb-2">
                                                              <a href="" class="text-default mb-2"
                                                                  data-abc="true">
                                                                  {el.name}
                                                              </a>
                                                          </h6>{" "}
                                                      </div>
                                                      <h3 class="mb-0 font-weight-semibold">${el.price}</h3>
                                                      <div>
                                                          {" "}
                                                          <i class="fa fa-star star">🍾</i>{" "}
                                                          <i class="fa fa-star star"></i>
                                                          <i class="fa fa-star star"></i>
                                                          <i class="fa fa-star star"></i>
                                                      </div>
                                                      <div class="text-muted mb-3">34 reviews</div>
                                                      <button type="button" onClick={() => addToCart(el.id)} class="btn btn-outline-secondary">
                                                          <i class="fa fa-cart-plus mr-2">Agregar</i> 
                                                      </button>
                                                  </div>
                                              </div>
                                          </div>
                                      ))}
                              </div>
                              <div class="justify-content-center">
                                  <button id='botonazo' className='btn btn-dark ml-2 mt-1' onClick={() => setnumberPage(numberPage + 1)}>SIGUENTE</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </StyledDiv>
          <Footer />
      </>
  );
}

export default Espumantes;