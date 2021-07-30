import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { StyledDiv } from "./styled";
import { useAuth } from "../../../src/contexts/AuthContext";
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
import getUser, { removeProductCart, getProducts } from "../../actions/index"
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch  } from 'react-redux'
import ShoppingCart from "../shoppingCart/ShoppingCart";

const Nav = () => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false);
  const [carritoOn, setCarritoOn] = useState(false) 
  const productCart = useSelector((state) => state.productCart)
  const user1 = useSelector((state) => state.user)

  const handleLogin = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const { currentUser, logout } = useAuth();

  // productCart.forEach(e=> {if(e.stock<1)removeProductCart(e.id)})

  const handleLogOut = async () => {
    window.localStorage.removeItem('user')
    await logout();
    setIsOpen(false);
    // history.push("/home");
  };

  return (
    <StyledDiv>
      <div className="header-container">
        <div className="help-menu-izq col-sm-3 col-md-3 col-lg-3" >
          <img
            className="delivery"
            src={delivery}
            alt="delivery img"
            width="22px"
          ></img>
          <i className="text-envio">Envíos sin cargo a CABA y GBA</i>
          <ul className="row">
            <a href="https://wa.link/" className="col-2" target='_blank' rel='noreferrer'>
              <img alt="whatsapp img" src={whatsapp} width="20px" height="20px" />
            </a>
            <a href="https://www.facebook.com/" className="col-2" target='_blank' rel='noreferrer'>
              <img alt="facebook img" src={facebook} style={{width: 'inherit'}} />
            </a>
            <a href="https://www.instagram.com/" className="col-2" target='_blank' rel='noreferrer'>
              <img alt="instagram img" src={instagram} width="20px" />
            </a>
            <a href="https://twitter.com/" className="col-2" target='_blank' rel='noreferrer'>
              <img alt="twitter img" src={twitter} width="20px" />
            </a>
          </ul>
        </div>
        <div className="logo col-sm-6 col-md-4 col-lg-4 ">
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
            <li>
            {currentUser ? (
                  <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/micuenta">Mi cuenta</Dropdown.Item>
                    <Dropdown.Item href="/update-profile">Cambiar contraseña</Dropdown.Item>
                    {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL||user1&&user1.admin ? (
												<Dropdown.Item href="/dashboard-admin">
													Dashboard Admin
												</Dropdown.Item>
											) : null}
                    <Dropdown.Item onClick={handleLogOut} href="/home">Cerrar Sesion</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
            ) :
            (
              <li class="mt-3">
            <a class=" m-4" href="/user" onClick={handleLogin}>
              <img alt="user img" src={user} width="20px" />
            </a>
            </li>
            )
            }
            </li>
          
            <li class='d-flex mt-2'>
              <li class="sidebar-social ">
                {/* <button onClick={()=>{dispatch(getProducts())}}>  */}
                              <a href="/compras" class="cart" title="Carrito" rel="nofollow">
                                <i class="fas fa-shopping-cart ">
                                  {/* < span id="cart_menu_num" class=" ml-4 badge rounded-circle" data-action="cart-can">{productCart?.length||0}</span> */}
                                  < span id="cart_menu_num" class=" ml-4 badge rounded-circle" data-action="cart-can">{productCart?.filter(e=>e.stock>0).length}</span>
                                  <img className=" d-flex mt-0 p-0" alt="cart img" src={cart} width="20px"/>
                                </i>
                              </a>
                {/* </button> */}
              </li>
            </li>
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