import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDetail,
  addProductCart,
  getProducts,
  getFavorites,
} from "../../actions/index";
import Nav from "../navbar/navbar";
import Footer from "../footer/footer";

export default function Sugeridos() {
  const dispatch = useDispatch();

  //Estado con favoritos del user
  const wishlistProducts = useSelector((state) => state.wishList);
  console.log("los wish", wishlistProducts);
  //Estado con todos los productos
  const products = useSelector((state) => state.products);
  console.log("los produ", products);

  //Estado con datos del user
  const user = useSelector((state) => state.user);

  const [recomendados, setRecomendados] = useState([])
  
  let array = [];
  
 

  
//   let probando = wishlistProducts.map((el) => {
//     if (el.subcategories.includes(elemento.subcategories)) {
//       return el;
//     }
//   });
  
  /* let result = arrays.filter((item,index)=>{
   return arrays.indexOf(item) === index;
   })
   
 */

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
  }, [dispatch]);

  useEffect(() => {
    const dbProducts = () => {
      setAllProducts(products);
    };
    dbProducts();
  }, [products]);

  return (
    <div>
      <Nav />

      <section>
        <div
          id="carousel-example-2"
          class="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carousel-example-2"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carousel-example-2" data-slide-to="1"></li>
            <li data-target="#carousel-example-2" data-slide-to="2"></li>
          </ol>

          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <div class="view">
                <img
                  class="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Others/clothes(5)-crop.jpg"
                  alt="First slide"
                />
                <a href="#!">
                  <div class="mask rgba-black-light"></div>
                </a>
              </div>
              <div class="carousel-caption">
                <h3 class="h3-responsive">First shop item</h3>
                <p>First text</p>
              </div>
            </div>
            <div class="carousel-item">
              <div class="view">
                <img
                  class="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Others/clothes(4)-crop.jpg"
                  alt="Second slide"
                />
                <a href="#!">
                  <div class="mask rgba-black-light"></div>
                </a>
              </div>
              <div class="carousel-caption">
                <h3 class="h3-responsive">Second shop item</h3>
                <p>Secondary text</p>
              </div>
            </div>
            <div class="carousel-item">
              <div class="view">
                <img
                  class="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Others/clothes(3)-crop.jpg"
                  alt="Third slide"
                />
                <a href="#!">
                  <div class="mask rgba-black-light"></div>
                </a>
              </div>
              <div class="carousel-caption">
                <h3 class="h3-responsive">Third shop item</h3>
                <p>Third text</p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carousel-example-2"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carousel-example-2"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
