import React from 'react'
import Sidebar from '../../../dashboard-admin/sidebar/Sidebar';
import GestionProductos from '../../../register/adminRegister/component/gestionProductos';
import './products.css'

export default function Products() {
  return (
    <>
    <Sidebar />
    <div className="componente">
        <GestionProductos />
      </div>
    </>
  )
}
