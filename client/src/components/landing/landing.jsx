import React, { useState, useEffect } from "react";
import "./landing.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import logo1 from "../../assets/images/logo.png";
import Loading from "../loading/Loading";

export const LandingPage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 400);
  }, []);

  if (!loading) {
    return <Loading />;
  } else {
    return (
            
        <div className="div_content">
          <div className="msgContainer">
            <div>
              <img src={logo} alt="img logo" className="LogoLanding" />
            </div>
            <hr />
            <p className="msg">VINOS - ESPUMANTES - WHISKIES - CERVEZAS</p>
            <div className="div_btn">
              <Link to="/home">
                <button className="btn btn-dark">ENTRAR</button>
                {/* <img src={saca} alt="" />*/}
              </Link>
            </div>
          </div>
        </div>
    
    );
  }
};

export default LandingPage;
