import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, addProductCart, addToWishList } from "../../../actions/index";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import StyledDiv from "../../detail/styled";
import Loading from "../../dashboard-user/loading/LoadingAdmin";
import ProductRating from "../../productRating/productRating";

function Vinos() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);
  const user = useSelector((state) => state.user)
  const addingToWishList = (Uid, productId) => {
    // const productFav = wishList?.filter(el=> el)
    // console.log('ELUSER', Uid, 'ELFAV', productId)
    let body = { productId: productId };
    dispatch(addToWishList(Uid, body));
  };
  const [allProducts, setAllProducts] = useState([]);

  const [numberPage, setnumberPage] = useState(1);
  const initialProducts = 9;
  const conteoFinal = numberPage * initialProducts;
  const conteoInicial = conteoFinal - initialProducts;

  const showProducts = allProducts
    .filter((el) => el.type === "Vinos")
    .slice(conteoInicial, conteoFinal);

  let subCategories = [];
  let counts = {};
  product
    .filter((el) => el.type === "Vinos")
    .map((e) =>
      e.subcategories.forEach((c) =>
        subCategories.indexOf(c) === -1 ? subCategories.push(c) : null
      )
    );

  product
    .filter((el) => el.type === "Vinos")
    .map((e) =>
      e.subcategories.forEach((el) => {
        counts[el] = counts[el] ? (counts[el] += 1) : 1;
      })
    );

  // const countsSorted = Object.entries(counts).sort(([, b], [_, a]) => a - b);

  // console.log(countsSorted);
  // console.log(subCategories)

  useEffect(() => {
    const dbProducts = () => {
      dispatch(getProducts());
    };
    dbProducts();
  }, [dispatch]);
  
  const handleCategories = () => {
    setAllProducts(product);
  };
  
  const addToCart = (id) => {
    dispatch(addProductCart(id))
  }
  
  
  const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const dbProducts = () => {
        setAllProducts(product.filter(el=>el.type === "Vinos"));
        console.log(allProducts.length)
      };
      dbProducts();
    }, [product]);
  
  useEffect(() => {
    if (numberPage < 1) setnumberPage(1);
    if (numberPage > Math.ceil(allProducts.length/9)) setnumberPage(numberPage-1); 
  }, [allProducts, numberPage]);

  useEffect(() => {
    setTimeout(() => setLoading(true), 600);
  }, []);

  const style = {width: "16rem" }

  if (!loading) {
    return <Loading />;
  } else {
    return (
      <>
        <StyledDiv>
          <div class="d-flex justify-content-center-md-center mt-5 " >
            <div class="btn-group-vertical col-sm-2 mt-5 mb-1 justify-content-start md-start ">
              {/* <button id='botonazo'className='btn btn-success' onClick={handleCategories}>CATEGORIAS</button> */}
              <div class="row col-sm-14  ml-1 ">
                {subCategories.map(d => <button id='botonazo' className='btn btn-dark mt-1' key={d}
                  onClick={(e) => { e.preventDefault(); setAllProducts(product.filter(el => el.subcategories.includes(d)))}}>{d} ({counts[d]})</button>)
                }
              </div>
            </div>
            <div>
              <div class="d-flex justify-content-center mt-5 mb-1 ">
                <div class="container d-flex justify-content-center mt-50 mb-50 mw-100">
                  <div className=''>
                    <button id='botonazo' className='btn btn-dark mr-2 mt-1' onClick={() => setnumberPage(numberPage - 1)}>ANTERIOR</button>
                  </div>
                  <div class="row col justify-content-evenly">
                    {showProducts &&
                      showProducts.map(el => {
                        return el.stock > 0 ? <>
                          <div class="justify-content-around align-items-center mb-3" style={style}>
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
                                    <a
                                      href={`/detail/${el.id}`}
                                      class="text-default mb-2"
                                      data-abc="true"
                                    >
                                      {el.name}
                                    </a>
                                  </h6>{" "}
                                </div>
                                <h3 class="mb-0 font-weight-semibold">$ {el.price}</h3>
                                {user&&<FontAwesomeIcon
                                  className="highlight"
                                  icon={faHeart}
                                  type="button"
                                  value={el.id}
                                  onClick={(e) =>
                                    addingToWishList(user.id, el.id)
                                  }
                                />}
                                <ProductRating product={el} key={el.id} />
                                <button type="button" onClick={() => addToCart(el.id)} class="btn btn-outline-secondary">
                                  <i class="fa fa-cart-plus mr-2"></i> Agregar
                                </button>
                              </div>
                            </div>
                          </div>
                        </> : null
                      })}
                  </div>
                  <div class="justify-content-center">
                    <button className='btn btn-dark ml-2 mt-1' onClick={() =>{  setnumberPage(numberPage + 1);if(numberPage > Math.ceil(allProducts/9)) setnumberPage(1)}}>SIGUENTE {numberPage}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </StyledDiv>
      </>
    );
  }
}

export default Vinos;

