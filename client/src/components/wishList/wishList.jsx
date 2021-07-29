import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../navbar/navbar";
import Footer from "../footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { removeFromWishlist, addProductCart, getFavorites } from "../../actions/index";
import { Link } from "react-router-dom";
import ProductRating from "../productRating/productRating";
import Styled from "./styled";
import swal from 'sweetalert';

//import StyledDiv from "./styled";

export default function WishList() {
  const dispatch = useDispatch();
  const wishList= useSelector((state=> state.wishList))
  console.log('wish',wishList)
  //const [wishList,setWishlist]=useState(wishlist);

const user= useSelector((state=> state.user))
  const addToCart = (id) => {
    dispatch(addProductCart(id));
  };
 
 const deleteFromWishList = (Uid, productId) => {
   
   dispatch(removeFromWishlist(Uid,productId))
   swal("Se quitó de tus Favoritos",'Puedes volver a agregar este producto cuando desees.' , "error");
  };
    
  useEffect(() => {
   user&&dispatch(getFavorites(user.id))
    
  },[])

 
  return (
    <>
      <Nav />
      <Styled>
        <div>
          <div className="div_container">
            <div class="container d-flex justify-content-center mt-50 mb-50">
              <div class="row container-product">

                 {wishList &&
                  wishList.map((el) => {
                    return (
                      <>
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
                                    href={`/detail/${el.id}`}
                                    class="text-default mb-2"
                                    data-abc="true"
                                  >
                                    {el.name}
                                  </a>
                                </h6>
                              </div>
                              <h3 class="mb-0 font-weight-semibold">
                                $ {el.price}
                              </h3>
                              <FontAwesomeIcon
                                className="highlight"
                                icon={faHeart}
                                type="button"
                                value={el.id}
                                onClick={(e) =>
                                  deleteFromWishList(user.id,el.id)
                                }
                              />
                              {<ProductRating product={el} key={el.id} /> }

                              <button
                                type="button"
                                onClick={() => addToCart(el.id)}
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