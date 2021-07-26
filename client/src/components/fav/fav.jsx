import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList } from "../../actions/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


export default function Fav(props) {
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishList);

  const addingToWishList = (e) => {
    //const productFav = product.filter(el=> el.id === e.target.value)
    dispatch(addToWishList(e));
  };

  return (
    <> 
        <FontAwesomeIcon
            className="highlight"
            icon={faHeart}
            type="button"
            value={props.el.id}
            onClick={() =>
                addingToWishList({ fav: props.el })
            }
            />       
        
    </>
  );
}
