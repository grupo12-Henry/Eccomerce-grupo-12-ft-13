import React from "react";
import { StyledDiv } from "./styled";
import delivery from '../../assets/images/delivery-truck.png';
import instagram from '../../assets/images/instagram.png';
import twitter from '../../assets/images/gorjeo(1).png';
import whatsapp from '../../assets/images/Loco wsap.png';
import facebook from '../../assets/images/logo-de-facebook.png';
import logo from '../../assets/images/logo.png';
import cart from '../../assets/images/cart.png';
import user from '../../assets/images/user.png';
import Auto from "../searchbar/searchbar";

const Nav = () => {
    const style = {
        marginTop: "60px"
    }
return (
    <StyledDiv>
        <div className='header-container'>
            <div className='container'>
                <div className='row'>
                    <div className='help-menu col-sm-4 col-md-4 col-lg-4' style={style}>
                        <img className='delivery' src={delivery} alt='delivery img' width='22px'></img>
                        <i className="text-envio">Envíos sin cargo a CABA y GBA</i>
                        <ul className="row">
                            <a href='https://wa.link/sxenpo' className="col-2"><img alt='whatsapp img' src={whatsapp} width='22px'/></a>
                            <a href='https://www.facebook.com/' className="col-2"><img alt='facebook img' src={facebook} width='20px'/></a>
                            <a href='https://www.instagram.com/' className="col-2"><img alt='instagram img' src={instagram} width='20px'/></a>
                            <a href='https://twitter.com/' className="col-2"><img alt='twitter img' src={twitter} width='20px'/></a>
                        </ul>
                    </div>
                        <div className="logo col-sm-6 col-md-4 col-lg-4">
                            <a className="link-logo" href='/'><img className='img-responsive' src={logo} alt='logo img' width='360px'></img>
                            </a>
                        </div>
                        <div className='help-menu col-sm-4 col-md-4 col-lg-4'>
                        
                        <ul className="d-flex justify-content-center" style={style}>
                            <Auto/>
                            <li className="col-3"><img className='cart' alt='cart img' src={cart} width='20px' /></li>
                            <li className="col-3"><img alt='user img' src={user} width='20px'/></li>
                        </ul>
                        
                    </div>
                        
                </div>
            </div>
        </div>
    </StyledDiv>
);
};

export default Nav;