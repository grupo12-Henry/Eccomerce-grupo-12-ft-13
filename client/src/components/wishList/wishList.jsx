import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../navbar/navbar";
import Footer from "../footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
//import StyledDiv from "./styled";



export default function WishList() {
  const dispatch = useDispatch();
  const wishlist = JSON.parse(window.localStorage.getItem('favs'));
  console.log("TUS FAVS REY", wishlist);


  return (
    <div>
      <Nav />
      <Footer />
    </div>
  );
}
