import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";

export default function ProductRating({value}) {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.productDetail);
  
    // if (!product.reviews || product.reviews.length===0){
    //   product.reviews=[{description:'Este producto no tiene calificaciones', value:1}]
    // }
//     console.log('detail:', product)
    
//     //value1 es un array con los valores de todas las reviews de ese prod.
//     const reducer = (accumulator, currentValue) => accumulator + currentValue;
//   let value1 = product.reviews || [{description:'Este producto no tiene calificaciones', value:1}];
//   value1 = value1.map( el => el.value);
//   const value2 = value1.length?value1.reduce(reducer)/product?.reviews?.length:null; //luego suma esos valores y los divide por la cantidad de reviews
    const firstExample = {
      size: 30,
       value: value,
      edit: false,
    };

  return (
    <>
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ReactStars {...firstExample} />
          </div>
        </div>    
    </>
  );
}
