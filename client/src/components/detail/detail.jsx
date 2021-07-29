import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, addProductCart, getProducts } from "../../actions/index";
import StyledDiv from "./styled";
import Loading from "../dashboard-user/loading/LoadingAdmin";
import Reviews from "../reviews/reviews";

export default function Detail({ match }) {
  const dispatch = useDispatch();

useEffect(() => {
  const dbProducts = () => {
    dispatch(getProducts());
  };
  dbProducts();
}, [dispatch]);

  const product = useSelector((state) => state.productDetail);
  const [detail, setDetail] = useState([]);

  console.log(match);

  useEffect(() => {
    dispatch(getDetail(match.params.id))
  }, [getDetail, match.params.id]);

  const addToCart = (data) => {
   detail.stock>0&& dispatch(addProductCart(data))
  }
  useEffect(() => {
    setDetail(product)
  }, [product]);


  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 1000);
  }, []);

  if (!loading) {
    return <Loading />;
  } else {
    return (
      <div>
        <StyledDiv>
          <section id='container'>
            <img id='image' src={detail.image} alt='' />
            <div id='info'>
              <h1 id='name'>{detail.name}</h1>
              <h3 id='maker'>{detail.type === 'Vinos' ? detail.maker : null}</h3>
              <hr></hr>
              <p id='description'>{detail.Description}</p>
              <hr></hr>
              {detail.stock===0?<div><span>No hay Stock Suficiente</span>
               <hr></hr></div>:null}
             
              <h2 id='price'>$ {detail.price}</h2>
              <div>
            <button className='btn' type="button" onClick={() => addToCart(detail.id, console.log('5', detail.id))} class="btn bg-cart">
          
              <i class="fa fa-cart-plus mr-2">Agregar</i>
            </button>
            <div/>
            <Reviews/>

            
            </div>
            
            </div>
          </section>
        </StyledDiv>
      </div>
    );

  }
}