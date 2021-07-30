import React from 'react'
import Cervezas from '../../../categories/cervezas/cervezas';
import Footer from '../../../footer/footer';
import Sidebar from '../../sidebar/Sidebar';
import './cervezas.css'

export default function Delivery() {
  return (
    <>
      <Sidebar />
    <div className="componente">
      <Cervezas />
    </div>
    <div className="fotter">
      <Footer />
    </div>
    </>
  )
}
