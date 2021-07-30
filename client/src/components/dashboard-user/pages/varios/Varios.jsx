import React from 'react'
import Varios from '../../../categories/varios/varios';
import Sidebar from '../../sidebar/Sidebar';
import './varios.css'
import Footer from '../../../footer/footer';

export default function Delivery() {
  return (
    <>
      <Sidebar />
      <div className="componente">
        <Varios />
      </div>
      <div className="fotter">
        <Footer />
      </div>
    </>
  )
}
