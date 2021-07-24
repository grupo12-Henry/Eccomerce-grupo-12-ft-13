import React from "react";
import ReactStars from "react-rating-stars-component";

export default function ProductRating({product}) {
    
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
  const value1= product.reviews.length!==0&&product.reviews.map( el => el.value);
   const value2 =  value1?value1.reduce(reducer)/product?.reviews?.length:null; //luego suma esos valores y los divide por la cantidad de reviews
   
   const firstExample = {
      size: 30,
       value: value2,
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
