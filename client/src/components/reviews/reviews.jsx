import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductRating from '../productRating/productRating';
import ReactStars from "react-rating-stars-component";

export default function Reviews() {
  const product = useSelector((state) => state.productDetail);
  
  return (
    <>
             
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <ProductRating product={product}/>
              </div>
              <div class="overflow-auto !important">
              {product.reviews && product.reviews.map(el=>{
             return <table><div style={{ display: "flex", justifyContent: "center" }}>
                <div class="text-muted mb-3">"{el.description}"</div>
              </div></table>})}</div>
            </div>
        
        
    </>
  );
}
