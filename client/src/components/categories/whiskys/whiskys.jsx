import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, addProductCart, addToWishList } from "../../../actions/index";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import StyledDiv from "../../detail/styled";
import Loading from "../../dashboard-user/loading/LoadingAdmin";
import ProductRating from '../../productRating/productRating'
import swal from 'sweetalert';
import "./whiskys.css";

function Whiskys() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);
  const user = useSelector((state) => state.user)
  const [allProducts, setAllProducts] = useState([]);
  const [numberPage, setnumberPage] = useState(1);
  const initialProducts = 9;
  const conteoFinal = numberPage * initialProducts;
  const conteoInicial = conteoFinal - initialProducts;

  const showProducts = allProducts
    .filter((el) => el.type === "Whiskys")
    .slice(conteoInicial, conteoFinal);
  // product.filter(el => el.type === 'Whiskys').map(e => e.subcategories.forEach((el) => {
  let subCategories = [];
  let counts = {};
  product
    .filter((el) => el.type === "Whiskys")
    .map((e) =>
      e.subcategories.forEach((c) =>
        subCategories.indexOf(c) === -1 ? subCategories.push(c) : null
      )
    );

  product
    .filter((el) => el.type === "Whiskys")
    .map((e) =>
      e.subcategories.forEach((el) => {
        counts[el] = counts[el] ? (counts[el] += 1) : 1;
      })
    );

  const countsSorted = Object.entries(counts).sort(([, b], [_, a]) => a - b);

  const addingToWishList = (Uid, productId) => {
    // const productFav = wishList?.filter(el=> el)
    // console.log('ELUSER', Uid, 'ELFAV', productId)
    let body = { productId: productId };
    dispatch(addToWishList(Uid, body));
    swal("Se agregó a Favoritos!", 'Podrás ver este producto en tu sección Favoritos siempre que estes logueado.', "success");

  };



  useEffect(() => {
    const dbProducts = () => {
      dispatch(getProducts());
    };
    dbProducts();
  }, [dispatch]);

  useEffect(() => {
    const dbProducts = () => {
      setAllProducts(product.filter(el=>el.type === "Whiskys"));
    };
    dbProducts();
  }, [product]);

useEffect(() => {
  if (numberPage < 1) setnumberPage(1);
  if (numberPage > Math.ceil(allProducts.length/9)) setnumberPage(numberPage-1); 
}, [allProducts, numberPage]);

    const addToCart = (id) => {
        dispatch(addProductCart(id))
    }
    const handleCategories = () => {
      setAllProducts(product);
    };
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setTimeout(() => setLoading(true), 600);
    }, []);
  
    const style = {width: "16rem" }

    if (!loading) {
      return <Loading />;
    } else {
    return (
      <>       
      <div className='pepe2'>
        <div class="container col-12 mt-5 mb-1 RespButtons">
          <div style={{margin: '0% 3% 0% 3% '}}>
            {subCategories.map((d) => (
              <button
                className="btn btn-dark btn-sm ml-1 mt-1 "
                key={d}
                onClick={(e) => {
                  e.preventDefault();
                  setAllProducts(
                    product.filter((el) => el.subcategories.includes(d))
                  );
                }}
              >
                {d} ({counts[d]})
              </button>
            ))}
          </div>
        </div>

        <StyledDiv>
          <div class="d-flex justify-content-center-md-center" style={{marginTop:'5%'}}>
             <div class="btn-group-vertical col-sm-2 mt-5 mb-1 justify-content-start md-start desktop ">
              <div class="row col-sm-14  ml-1 ">
                {subCategories.map(d => <button className='btn btn-dark mt-1' key={d}
                  onClick={(e) => { e.preventDefault(); setAllProducts(product.filter(el => el.subcategories.includes(d)))}}>{d} ({counts[d]})</button>)
                }
              </div>
            </div> 
            <div>
              <div class="d-flex justify-content-center mt-5 mb-1 ">
                <div class="container d-flex justify-content-center mt-50 mb-50 mw-100">
                  <div className="">
                    <button
                      id="botonazo"
                      className="btn btn-dark mr-2 mt-1"
                      onClick={() => setnumberPage(numberPage - 1)}
                    >
                      ◀
                    </button>
                  </div>
                  <div class="row col justify-content-evenly">
                    {showProducts &&
                      showProducts.map((el) => {
                        return el.stock > 0 ? (
                          <>
                            <div
                              class="justify-content-around align-items-center mb-3 responsiveCard"
                              
                            >
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
                                    <a
                                      href={`/home/detail/${el.id}`}
                                      class="text-default mb-2"
                                      data-abc="true"
                                    >
                                      {el.name}
                                    </a>
                                  </h6>{" "}
                                </div>
                                <h3 class="mb-0 font-weight-semibold">$ {el.price}</h3>
                              { user&& <FontAwesomeIcon
                                  className="highlight"
                                  icon={faHeart}
                                  type="button"
                                  value={el.id}
                                  onClick={(e) =>
                                    addingToWishList(user.id, el.id)
                                  }
                                />}
                                <ProductRating product={el} key={el.id} />
                                <button type="button" onClick={() => addToCart(el.id)} class="btn bg-cart">
                                  <i class="fa fa-cart-plus mr-2">Agregar</i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </> ): null
                      })}
                  </div>
                  <div class="justify-content-center">
                    <button
                      id="botonazo"
                      className="btn btn-dark ml-2 mt-1"
                      onClick={() => setnumberPage(numberPage + 1)}
                    >
                      ▶
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </StyledDiv>
      </div>
      </>
    );
  }
}
export default Whiskys;
