import React from 'react'
import Sidebar from '../sidebar/Sidebar';
import './loadingUser.css';
import winecup from '../../loading/winecup.gif';
import Footer from '../../footer/footer';

export default function LoadingAdmin() {
  return (
    <>
      <Sidebar />
    <div className="imagenDeLoadingf">
      <img src={winecup} alt="Loading" />
    </div>
    <Footer />
</>
  )
}
