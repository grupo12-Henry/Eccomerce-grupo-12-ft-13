import React from "react";
import pagos from '../../assets/images/pagos.png'
import logo from '../../assets/images/logo.png'
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';
import {
  MdEmail,
  MdLocalGroceryStore,
  MdPayment
} from "react-icons/md";

import './footer.css';

const Footer = () => {
  return (
    <div className="componente">
      <div className="logo">
        {/* <img src={logo} alt="Logo"/> */}
      </div>
      <div className="textos">
        MEDIOS DE PAGO:
      </div>
      <div className="textos">
        CONTACTO:
      </div>
      <div className="textos">
        DIRECCION:
      </div>
    </div>
  )
};

export default Footer;
