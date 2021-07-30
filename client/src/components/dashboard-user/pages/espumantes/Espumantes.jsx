import React from 'react'
import Espumantes from '../../../categories/espumantes/espumantes';
import Footer from '../../../footer/footer';
import Sidebar from '../../sidebar/Sidebar';
import './espumantes.css'

export default function Delivery() {
  return (
    <>
      <Sidebar />
      <div className="componente">
        <Espumantes />
      </div>
      <div className="fotter">
        <Footer />
      </div>
    </>
  )
}
