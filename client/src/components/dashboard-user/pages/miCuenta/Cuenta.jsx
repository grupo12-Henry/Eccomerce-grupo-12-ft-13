import React from 'react'
import Dashboard from '../../../register/userRegister/dashboard/dashboard';
import Sidebar from '../../sidebar/Sidebar';
import './cuenta.css';
import Footer from '../../../footer/footer';
export default function Cuenta() {
  return (
    <>
      <Sidebar />
      <div className="componenteDashboard">
        <Dashboard />
      </div>
      <Footer className="footerdeCuenta"/>
    </>
  )
}
