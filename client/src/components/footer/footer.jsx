import React from 'react';
import { StyledDiv } from './styled';
import logo from '../../assets/images/logo.png'
import tel from '../../assets/images/tel.png'
import email from '../../assets/images/email.png'
import pagos from '../../assets/images/pagos.png'

const Footer = () => {
    return (
        <StyledDiv>
            <div className='div_conteiner'>
                <div className='div_pagos'>
                    <i>MEDIOS DE PAGO</i>
                    <hr/>
                    <img src={pagos} alt='img pagos' width='120px'/>
                </div>
                <div className='div_logo'>
                    <img src={logo} alt='img logo' width='300px' />
                    <i>BEBER CON MODERACIÓN. PROHIBIDA SU VENTA A MENORES DE 18 AÑOS.</i>
                </div>
                <div className='div_info'>
                    <div> San Martin 525, Tucuman</div>
                    <div>
                        <br/>
                    <img src={tel} alt='img tel' width='22px' />
                    <i> +54 9 381 503 9017</i>
                    </div>
                    <br/>
                    <div>
                    <img src={email} alt='img mail' width='22px' />
                    <i> ventas@vinotecapp.com</i>
                    </div>
                </div>
                {<div className='div_info'>
                </div>}
            </div>
        </StyledDiv>
    )
}

export default Footer