import React from 'react'
import Sidebar from '../../../dashboard-admin/sidebar/Sidebar';
import GestionUsuarios from '../../../register/adminRegister/component/gestionUsuarios';
import './user.css'
import Footer from '../../../footer/footer'

export default function Users() {
  return (
    <>
    <Sidebar />
    <div className="componente">
        <GestionUsuarios />
    </div>
    <Footer />
    </>
  )
}
