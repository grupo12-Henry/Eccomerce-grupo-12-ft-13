import React from 'react'
import Login from './login'
import Sidebar from '../../../../components/dashboard-user/sidebar/Sidebar'
import Footer from '../../../footer/footer';
import './loginSolo.css'

export default function loginSolo() {
  return (
    <div>
      <Sidebar />
      <div>
        <Login />
      </div>
      <div className="loginSolo">
      <Footer />
      </div>
    </div>
  )
}
