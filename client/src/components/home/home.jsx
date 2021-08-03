import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  orderPost,
  addToWishList,
  addProductCart,
  getProducts,
  ClearCart,
} from "../../actions/index";
import StyledDiv from "./styled";
import { Link } from "react-router-dom";
import Pages from "./paginado";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import ProductRating from "../productRating/productRating";
import Roboto from "../chatbot/Chatbot";
import { useHistory } from "react-router-dom";
import Footer from '../../components/footer/footer';
import Sugeridos from '../sugeridos/sugeridos'
import Loading from '../loading/Loading';
import swal from 'sweetalert';

export default function Home({ location }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const product = useSelector((state) => state.products);
  const productDetail = useSelector((state) => state.productDetail);
  const wishList = useSelector((state) => state.wishList);


  const history = useHistory();
 
  const [allProducts, setAllProducts] = useState([]);
  const [page, setPage] = useState(1);
  const pago = JSON.parse(window.localStorage.getItem("pago"));
  const cart = JSON.parse(window.localStorage.getItem("array"));
  useEffect(() => {
    let historial = history.location.search.includes("&status=")
      ? history.location.search.split("&status=")[1].split("&")[0]
      : null; //[5].split('&')[0])
    let pedidoIdMP = history.location.search.includes("payment_id=")
      ? history.location.search.split("payment_id=")[1].split("&")[0]
      : null;
    if (historial && historial === "approved") {
      let aux = 0;
      cart?.forEach((e) => (aux = aux + e.price * e.cantidad));
      let productsArray = cart?.map(
        (el) =>
          (el = {
            subtotal: el.price * el.cantidad,
            cantidad: el.cantidad,
            id: el.id,
          })
      );
      let user = window.localStorage.getItem("user");
      let completo = user
        ? {
            idClient: user.split(",")[0].split(":")[1],
            adress: pago.direccion, //user.split(',')[5].split(':')[1],
            paymentMethod: pago.pago,
            products: productsArray,
            mail: user.split(",")[6].split(":")[1],
            bill: aux,
            idMP: pedidoIdMP,
          }
        : console.log("user is null");
      if (completo) {
        dispatch(orderPost(completo));
        window.localStorage.removeItem("array");
        dispatch(ClearCart());
      }
    }
  }, []);

  useEffect(() => {
      dispatch(getProducts());
  }, []);


  useEffect(() => {
    if (location.search !== "") {
      setPage(
        parseInt(location ? location.search.slice(location.search.indexOf("=") + 1): 1)
      );
    }
    
  }, [location?.search]);

  useEffect(() => {
    const dbProducts = () => {
      dispatch(getProducts());
    };
    dbProducts();
  }, [dispatch]);


  useEffect(() => {
    const dbProducts = () => {
      setAllProducts(product.filter(e=>e.stock>0));
    };
    dbProducts();
  }, [product]);

  const addToCart = (id) => {
    // showalert('Producto Agregado al carrito')
    dispatch(addProductCart(id));
  };

  const addingToWishList = (Uid, productId) => {
    // const productFav = wishList?.filter(el=> el)
    // console.log('ELUSER', Uid, 'ELFAV', productId)
    let body = { productId: productId };
    dispatch(addToWishList(Uid, body));
    swal("Se agregó a Favoritos!", 'Podrás ver este producto en tu sección Favoritos siempre que estes logueado.', "success");
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 600);
  }, []);

  // if (!loading) {
  //   return <Loading />
  // } else {
    return (
      <>  
        <Roboto />
        <Sugeridos/>
        <StyledDiv>
              <div class="row container-product container div_container d-flex justify-content-center mt-50 mb-50">
                  {allProducts && allProducts.length > 0
                    ? allProducts.slice((page - 1) * 9, page * 9).map((el) => {
                      return (el.stock > 0 ? (
                        <>
                            <div class="col-md-4 mt-2">
                              <div class="card">
                                <div class="card-body">
                                  <div class="card-img-actions">
                                    <Link to={`/home/detail/${el.id}`}>
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
                                        href={`/home/detail/${el.id}`}
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
                                  {user && (
                                    <FontAwesomeIcon
                                      className="highlight"
                                      icon={faHeart}
                                      type="button"
                                      value={el.id}
                                      onClick={(e) =>
                                        addingToWishList(user.id, el.id)
                                      }
                                    />
                                  )}
                                  {<ProductRating product={el} key={el.id} />}
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  ></div>

                                  <button
                                    type="button"
                                    onClick={() => addToCart(el.id)}
                                    class="btn btn-secondary"
                                  >
                                    <i class="fa fa-cart-plus mr-0"></i>Agregar</button>
                                </div>
                              </div>
                            </div>
                          </>
                        ) :null);
                      })
                    :null}
              </div>
        </StyledDiv>
        <Pages product={product} page={page} />
        <Footer />
      </>
    );
}
