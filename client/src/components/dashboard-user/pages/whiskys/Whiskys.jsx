import React from 'react'
import Whiskys from '../../../categories/whiskys/whiskys';
import Sidebar from '../../sidebar/Sidebar';
import './whiskys.css'
import Footer from '../../../footer/footer';

export default function Delivery() {
  return (
    <>
      <Sidebar />
      <div className="componente">
        <Whiskys />
      </div>
      <div className="fotter">
        <Footer />
      </div>
    </>
  )
}
