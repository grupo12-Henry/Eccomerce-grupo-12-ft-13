import React, { useState, useEffect } from "react";
import { StyledDiv } from "./styled";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import ControlledCarousel from "./carrousel.jsx";
import Loading from "../loading/Loading";
export const LandingPage = () => {
  const [loading, setLoading] = useState(false)
  // const history = useHistory()
  // let historial = (history.location?.search?.split('=')[4].split('&')[0])
  // console.log(historial)
	useEffect(() => {
		setTimeout(() => setLoading(true), 600)
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
