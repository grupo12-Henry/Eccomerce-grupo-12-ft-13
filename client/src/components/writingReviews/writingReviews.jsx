import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { getDetail, postReview } from "../../actions";
import { useHistory } from "react-router";
import Nav from "../navbar/navbar";
import Footer from "../footer/footer";

export default function WritingReviews({ match }) {
  const dispatch = useDispatch();
  const [valor,setValor]= useState({
   value:0,
   description:'' 
  })
  const handleReview = (e) => {
    setValor({
      ...valor,
      [e.target.name]: e.target.value
    })
  }
  const secondExample = {
    size: 30,
    value: valor.value,
    edit: true,
    isHalf: true,
    onChange: newValue => {
      setValor({...valor,value:parseInt(newValue,10)})
      console.log(newValue)
    
    }
  }
  
   const history = useHistory();
  
   
  
  const putSubmit = (id,valor,e) => {
    e.preventDefault()
    dispatch(postReview(id,valor))
}
  
  useEffect(() => {
    dispatch(getDetail(parseInt(match.params.id, 10)));
  }, [dispatch]);

  const producto = useSelector((valor) => valor.productDetail);
  console.log('valor VITEH',valor)

  return (
    <>
      <Nav />

      <div>
        <h2 class="d-flex justify-content-center">Calificá este producto</h2>
      </div>
      <div class="container-fluid d-flex justify-content-center">
        <div class="row">
          
          <h1>{producto.name}</h1>
          <h4>{producto.maker}</h4>
          <img
            style={{ width: "20%" }}
            src={producto.image}
            alt="reviewimage"
          />
          

          <div class="ml-2 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad d-flex justify-content-center">
            <form class="mt-3 ml-2"  onSubmit={(e) => {
                      putSubmit(parseInt(match.params.id, 10),valor,e)
                      history.push('/home');
                    }} >
              <div class="form-row mb-5">
                <br />
                <div>
                  <textarea
                    name='description'
                    value={valor.description}
                    class="form-control mt-2 ml-5"
                    placeholder="Deja tu comentario aca"
                    onChange={e =>handleReview(e)}
                  ></textarea>
                  <div class='ml-2'style={{ display: "flex", justifyContent: "center" }}>
                    <ReactStars  {...secondExample}  />
                  </div>    
                  <button
                    class="btn btn-dark btn-lg btn-block mt-2 ml-5"
                    type="submit"
                 /*    onClick={(e)=>putSubmit(parseInt(match.params.id, 10), valor,e)} */
                  >
                    ENVIAR CALIFICACION
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
