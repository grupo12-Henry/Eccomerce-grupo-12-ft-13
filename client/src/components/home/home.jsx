import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/index";
import StyledDiv from "./styled";
import Nav from "../navbar/navbar";
import Footer from "../footer/footer";
import { Link } from 'react-router-dom';
import HomeProductsCards from '../homeProductsCards/homeProducts';
// import SignUp from '../signUp/SignUp';
// import Pages from "./paginado";
// import Order from "../order/order";


export default function Home({location}) {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.products);

    const [allProducts, setAllProducts] = useState([]);
     const showProducts = allProducts
    const [page, setPage] = useState(1);

    useEffect(() => {
      if (location.search !== '') {
          setPage(parseInt(location.search.slice(location.search.indexOf('=') + 1)));
        }
    }, [location.search])
  
    
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


    // if (numberPage < 1) setnumberPage(1);
    // if (numberPage > 25) setnumberPage(25);

    return (
        <StyledDiv>
          <div>
            <Nav />
            <div className="div_container">
              <div class="container d-flex justify-content-center mt-50 mb-50">
                <div class="row">
                  {allProducts &&
                    allProducts.length > 0 ? allProducts.slice((page - 1) * 9, page * 9).map((el) => (
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
                                {" "}
                                <a
                                  href=""
                                  class="text-default mb-2"
                                  data-abc="true"
                                >
                                  {el.name}
                                </a>{" "}
                              </h6>{" "}
                              
                            </div>
                            <h3 class="mb-0 font-weight-semibold">{el.price}</h3>
                            <div>
                              {" "}
                              <i class="fa fa-star star"></i>{" "}
                              <i class="fa fa-star star"></i>
                              <i class="fa fa-star star"></i>
                              <i class="fa fa-star star"></i>
                            </div>
                            <div class="text-muted mb-3">34 reviews</div>
                            <button type="button" class="btn bg-cart">
                              <i class="fa fa-cart-plus mr-2"></i> Agregar
                            </button>
                          </div>
                        </div>
                      </div>
                    )) : null }
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </StyledDiv>
      );
    }
