import React from 'react'
import Sidebar from '../../../dashboard-admin/sidebar/Sidebar';
import GestionPedidos from '../../../register/adminRegister/component/gestionPedidos';
import './delivery.css'
import Footer from '../../../footer/footer'
export default function Delivery() {
  return (
    <>
    <Sidebar />
    <div className="componente">
      <GestionPedidos />
    </div>
    <Footer />
    </>
  )
}
