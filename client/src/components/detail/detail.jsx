import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, addProductCart, getProducts } from "../../actions/index";
import StyledDiv from "./styled";
import Loading from "../dashboard-user/loading/LoadingAdmin";
import Reviews from "../reviews/reviews";

export default function Detail({ match }) {
  console.log('MATCH', match)
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
          <section className='container-fluid mt-5' >
            <div className='row' style={{margin: '0% 10% 0% 2%'}}>
            <div className='col-3 mr-5 centrado' style={{display: 'flex',justifyContent: 'center'}}>
            <img id='product' style={{height: '60vh', marginBottom: '5%'}} src={detail.image} alt='product img'/>
            </div>
           
            <div className='col-8'>
              <h1 id='name'>{detail.name}</h1>
              <h3 id='maker'style={{marginTop: '5%', marginBottom: '5%', textAlign: 'center'}}>{detail.type === 'Vinos' ? detail.maker : null}</h3>
              <hr></hr>
              <p id='description'>{detail.Description}</p>
              <hr></hr>
              {detail.stock===0?<div><span>No hay Stock Suficiente</span>
               <hr></hr></div>:null}
             
              <h2 id='price'>$ {detail.price}</h2>
              <div>
              <div class='d-flex align-items-center justify-content-center'>
            <button style={{marginBottom: '2%'}} class='btn btn bg-cart' type="button" onClick={() => addToCart(detail.id)} >
              <i class="fa fa-cart-plus mr-2">Agregar</i>
            </button></div>
            <div/>
            <Reviews />

            
            </div>
            </div>
            </div>
          </section>
        </StyledDiv>
      </div>
    );

  }
}