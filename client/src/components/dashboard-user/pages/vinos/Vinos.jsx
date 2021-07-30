import React from 'react'
import Vinos from '../../../categories/vinos/vinos'
import Sidebar from '../../sidebar/Sidebar'
import './vinos.css'
import Footer from '../../../footer/footer'

export default function Delivery() {
  return (
    <>
      <Sidebar />
      <div className="componente">
        <Vinos />
      </div>
      <div className="fotter">
        <Footer />
      </div>
    </>
  )
}
