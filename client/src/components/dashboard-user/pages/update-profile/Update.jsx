import React from 'react'
import Footer from '../../../footer/footer';
import UpdateProfile from '../../../register/userRegister/updateProfile/updateProfile'
import Sidebar from '../../sidebar/Sidebar';

export default function Update() {
  return (
    <div>
      <Sidebar />
      <div>
        <UpdateProfile />
      </div>
      <Footer />
    </div>
  )
}
