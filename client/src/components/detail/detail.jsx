import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getDetail } from "../../actions/index";
import StyledDiv from "./styled";
import Nav from "../navbar/navbar";
import Footer from "../footer/footer";

export default function Detail({match}) {
 
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productDetail);


  const [detail, setDetail] = useState([]);

	useEffect(() => {
		dispatch(getDetail(match.params.id))
		}, [getDetail, match.params.id]);

    
	useEffect(() => {
		setDetail(product)
		}, [product]);


  return (
    <div>
      <Nav/>
      <StyledDiv>
        <section id='container'>
          <img id='image' src={detail.image}/>
          <div id='info'>
              <h1 id='name'>{detail.name}</h1>
              <h3 id='maker'>{detail.type === 'Vinos'? detail.maker:null }</h3>
              <hr></hr>
              <p id='description'>{detail.Description}</p>
              <hr></hr>
              <h2 id='price'>${detail.price}</h2>
          </div>
      </section>
      </StyledDiv>
      <Footer/>
    </div>
  );
}

