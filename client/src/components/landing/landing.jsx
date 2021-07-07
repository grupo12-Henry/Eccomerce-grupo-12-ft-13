import React from "react";
import { StyledDiv } from './styled';
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import promo from '../../assets/images/promo.png'

export const LandingPage = () => {
    return (
      <StyledDiv>
        <div className="div_content">
        <div>
          <img src={logo} alt='img logo' width='360px'/>
        </div>
        <div>
          <img src={promo} alt='img logo' width='360px'/>
        </div>
        <div className="div_btn">
            <Link to="/home">
              <button className="btn">ENTRAR</button>
            </Link>
        </div>        
        </div>
      </StyledDiv>
    );
  };


  
  
  
  export default LandingPage;
