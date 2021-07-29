import React from 'react'
import Dashboard from '../../../register/userRegister/dashboard/dashboard';
import Sidebar from '../../sidebar/Sidebar';
import './cuenta.css';

export default function Cuenta() {
  return (
    <>
      <Sidebar />
      <div className="componenteDashboard">
        <Dashboard />
      </div>
    </>
  )
}
