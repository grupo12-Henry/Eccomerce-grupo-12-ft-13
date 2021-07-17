import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addProductCart,
  removeProductCart,
  ClearCart,
  getProducts,
  ADD_TO_CART,
  addLocalStorage,
  getLocalStorage,
  deleteLocalStorage,
} from "../../actions";
// import ProductCart from './ProductCart';
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import CartShp from "./CartShp";
import Loading from "../loading/Loading";

function ShoppingCart(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.productCart);
  const product = useSelector((state) => state.products);
  const localStorage = useSelector((state) => state.arrayStorages);

  const [allProducts, setAllProducts] = useState([]);

  //consologuea el localStorage
  useEffect(() => {
    console.log(localStorage);
  }, [localStorage]);

  useEffect(() => {
    const dbProducts = () => {
      setAllProducts(product);
    };
    dbProducts();
  }, [product]);

  const addToCart = (el) => {
    dispatch(addLocalStorage(el));
    dispatch(addProductCart(el.id));
    console.log();
  };

  const delFromCart = () => {};

  const clearCart = () => {};

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 400);
  }, []);

  if (!loading) {
    return <Loading />;
  } else {
    return (
      <div class="cart_section">
        <div class="container-fluid">
          <div class="row">
            <h2>SIMULADOR DE HOME</h2>
            <h3>Carrito</h3>
            <article>
              {CartShp}
              <button onClick={() => clearCart()}>Limpiar Carrito</button>
              {cart.map((item, index) => (
                <CartItem key={index} data={item} delFromCart={delFromCart} />
              ))}
            </article>
            <h3>Productos</h3>
            <article class="box">
              {allProducts && allProducts.length > 0
                ? allProducts.map((el) => (
                    <div class="col-md-4 mt-2">
                      <div class="card">
                        <div class="card-body">
                          <div class="card-img-actions">
                            <Link to={`/detail/${el.id}`}>
                              <img
                                src={el.image}
                                class="card-img img-fluid"
                                height="45px"
                                alt=""
                              />
                            </Link>
                          </div>
                        </div>
                        <div class="card-body bg-light text-center">
                          <div class="mb-2">
                            <h6 class="font-weight-semibold mb-2">
                              <a
                                href="/detail/id"
                                class="text-default mb-2"
                                data-abc="true"
                              >
                                {el.name}
                              </a>
                            </h6>
                          </div>
                          <h3 class="mb-0 font-weight-semibold">
                            ${el.price}.00
                          </h3>
                          <button
                            onClick={(el) => addToCart(el)}
                            type="button"
                            class="btn bg-cart"
                          >
                            <i class="fa fa-cart-plus mr-2"></i> Agregar
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
