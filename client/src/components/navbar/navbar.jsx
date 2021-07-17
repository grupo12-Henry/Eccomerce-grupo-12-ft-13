import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { StyledDiv } from "./styled";
import { useAuth } from "../../contexts/AuthContext";
import delivery from "../../assets/images/delivery-truck.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";
import whatsapp from "../../assets/images/whatsapp.png";
import facebook from "../../assets/images/facebook.png";
import logo from "../../assets/images/logo.png";
import cart from "../../assets/images/cart.png";
import user from "../../assets/images/user.png";
import Auto from "../searchbar/searchbar";
import NavModal from "../navModal/navModal";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch  } from 'react-redux'
import ShoppingCart from "../shoppingCart/ShoppingCart";
// import { carritoEstado } from "../../actions";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [carritoOn, setCarritoOn] = useState(false) 
  const productCart = useSelector((state) => state.productCart)

  const handleLogin = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const { currentUser, logout } = useAuth();

  const handleLogOut = async () => {
    await logout()
    setIsOpen(false)
  }

  // const setLocalStorage = value => {
  //   try {
  //     setText(value)
  //     window.localStorage.setItem("text", value)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
  let estado = JSON.parse(window.localStorage.getItem("array"))
  if(estado!== null){estado=estado.reverse()}
  // window.localStorage.setItem("array", JSON.stringify((array!=='undefined' && array!==null )? array.concat(nuevoItem) : array=[nuevoItem])); //state.productCart.concat([nuevoItem])
  if(!productCart.length&&estado){
    for(let i=0; i<estado.length;i++){
      for(let j=0;j<productCart.length;j++){
        if(productCart.length&&estado[i]!==undefined&&estado[i].id===productCart[j].id){i=i+1}
      }
      if(estado[i]!==undefined)productCart.push(estado[i])
    }
    // estado.forEach(e=>{if(productCart.length&&!productCart.forEach(d=> e.id!==d.id)){productCart.push(e)}})
  }//productCart.push
  
  const style = {
    marginTop: "1%",
  };

  return (
    <StyledDiv>
      <div className="header-container">
        <div className="help-menu-izq col-sm-3 col-md-3 col-lg-3" style={style}>
          <img
            className="delivery"
            src={delivery}
            alt="delivery img"
            width="22px"
          ></img>
          <i className="text-envio">Envíos sin cargo a CABA y GBA</i>
          <ul className="row">
            <a href="https://wa.link/" className="col-2" target='_blank' rel='noreferrer'>
              <img alt="whatsapp img" src={whatsapp} width="22px" />
            </a>
            <a href="https://www.facebook.com/" className="col-2" target='_blank' rel='noreferrer'>
              <img alt="facebook img" src={facebook} width="20px" />
            </a>
            <a href="https://www.instagram.com/" className="col-2" target='_blank' rel='noreferrer'>
              <img alt="instagram img" src={instagram} width="20px" />
            </a>
            <a href="https://twitter.com/" className="col-2" target='_blank' rel='noreferrer'>
              <img alt="twitter img" src={twitter} width="20px" />
            </a>
          </ul>
        </div>
        <div className="logo col-sm-6 col-md-4 col-lg-4">
          <a className="link-logo" href="/home">
            <img
              className="img-responsive"
              src={logo}
              alt="logo img"
              width="360px"
            ></img>
          </a>
        </div>
        <div className="help-menu">
          <div className="Auto">
            <Auto />
          </div>
          <ul className="d-flex">
            {/*  <li><a className="carrito"><button onClick={carritoHandler}>
              <img className="cart" alt="cart img" src={cart} width="20px" />
             </button></a> */}
            <Link to='/compras'> <li><a>
              <img className="cart" alt="cart img" src={cart} width="20px" />
            </a>
            </li></Link>
            <li>
            {currentUser ? (
                  <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/dashboard">Edit Profile</Dropdown.Item>
                    <Dropdown.Item href="/update-profile">Change Password</Dropdown.Item>
                    <Dropdown.Item onClick={handleLogOut}>Log Out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
            ) :
            (
            <a href="/user" onClick={handleLogin}>
              <img alt="user img" src={user} width="20px" />
            </a>
            )
            }
            </li>
            <li><a href="/user" onClick={handleLogin}>
              <img alt="user img" src={user} width="20px" />
            </a></li>
          </ul>
        </div>
        {/* <button onClick={() => setIsOpen(true)}>Open Portal</button> */}
        <NavModal open={isOpen} onClose={() => setIsOpen(false)}>
        </NavModal>
      </div>
      {/* <div class='mt-5 mb-3' >{productCart.length?<ShoppingCart/>:null}</div>  */}
    </StyledDiv>
  );
};

export default Nav;