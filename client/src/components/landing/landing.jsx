import React from "react";
import { StyledDiv } from './styled';
import { Link } from 'react-router-dom'

export const LandingPage = () => {
    return (
      <StyledDiv>
        <div className="div_content">
        </div>
        <div className="div_btn">
            <Link to="/home">
              <button className="btn">ENTRAR</button>
            </Link>
        </div>        
      </StyledDiv>
    );
  };


  
  
  
  export default LandingPage;
