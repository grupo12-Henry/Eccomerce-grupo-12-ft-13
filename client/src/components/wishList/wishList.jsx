import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../navbar/navbar";
import Footer from "../footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { removeFromWishlist, addProductCart } from "../../actions/index";
import { Link } from "react-router-dom";
import Reviews from "../reviews/reviews";
import Styled from "./styled";

//import StyledDiv from "./styled";

export default function WishList() {
  const dispatch = useDispatch();
  const wishlist = JSON.parse(window.localStorage.getItem("favs"));

  const addToCart = (id) => {
    // showalert('Producto Agregado al carrito')
    dispatch(addProductCart(id));
  };
  return (
    <>
      <Nav />
      <Styled>
        <div>
          <div className="div_container">
            <div class="container d-flex justify-content-center mt-50 mb-50">
              <div class="row container-product">
                {wishlist &&
                  wishlist.map((el) => {
                    console.log("EL DEL MAP", el.fav);
                    return (
                      <>
                        <div class="col-md-4 mt-2">
                          <div class="card">
                            <div class="card-body">
                              <div class="card-img-actions">
                                <Link to={`/detail/${el.fav.id}`}>
                                  <img
                                    src={el.fav.image}
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
                                    href={`/detail/${el.fav.id}`}
                                    class="text-default mb-2"
                                    data-abc="true"
                                  >
                                    {el.fav.name}
                                  </a>
                                </h6>
                              </div>
                              <h3 class="mb-0 font-weight-semibold">
                                $ {el.fav.price}
                              </h3>
                              <FontAwesomeIcon
                                className="highlight"
                                icon={faHeart}
                                type="button"
                                value={el.fav.id}
                                onClick={() =>
                                  dispatch(removeFromWishlist(el.fav.id))
                                }
                              />
                              <Reviews />

                              <button
                                type="button"
                                onClick={() => addToCart(el.fav.id)}
                                class="btn bg-cart"
                              >
                                <i class="fa fa-cart-plus mr-2"></i> Agregar
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </Styled>
      <Footer />
    </>
  );
}
