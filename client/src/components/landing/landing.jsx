import React, { useState, useEffect } from "react";
import { StyledDiv } from "./styled";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
//import promo from '../../assets/images/promo.png'
import ControlledCarousel from "./carrousel.jsx";
import Loading from "../loading/Loading";

export const LandingPage = () => {
  const [loading, setLoading] = useState(false)

	useEffect(() => {
		setTimeout(() => setLoading(true), 1000)
	}, [])

  if(!loading) {
    return (
      <Loading />
    )
  } else {
      return (
        <StyledDiv>
          <div className="div_content">
            <div>
              <img src={logo} alt="img logo" width="360px" />
            </div>
            <ControlledCarousel />
            <div className="div_btn">
              <Link to="/home">
                <button className="btn">
                  ENTRAR
                </button>
              </Link>
            </div>
          </div>
        </StyledDiv>
      );
  };
};
export default LandingPage;
