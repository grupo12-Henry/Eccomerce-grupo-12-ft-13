import React from 'react';
import './footer.css';
import logo from '../../assets/images/logo.jpg';
import pagos from '../../assets/images/pagos.png'

import {
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
    return (

        <div className='div_conteiner'>
            <div className='div_pagos'>
                <i>MEDIOS DE PAGO</i>
                <hr />
                <img src={pagos} alt='img pagos' width='120px' />
            </div>
            <div className='div_logo'>
                <img src={logo} alt='img logo' width='300px' />
                <i>BEBER CON MODERACIÓN. PROHIBIDA SU VENTA A MENORES DE 18 AÑOS.</i>
            </div>
            <div className='div_info'>
                <div> Contáctanos <a href='/home/contacto'>(+info)</a></div>
                <div>
                    <br />
                    <FaInstagram />
                    <i> @VinotecApp</i>
                </div>
                <br />
                <div>
                    <FaTwitter />
                    <i> @Vinotec_App</i>
                </div>
            </div>
            {<div className='div_info'>
            </div>}
        </div>

    )
}

export default Footer