import React from 'react'
import Contacto from './Contacto';
import Sidebar from '../../sidebar/Sidebar';
import Fotter from '../../../footer/footer';
import './contacto.css';

export default function contacto2() {
  return (
    <>
        <Sidebar />
      <div className="componente">
        <Contacto />
      </div>
      <div className="fotterDe">
        <Fotter />
      </div>
    </>
  )
}
