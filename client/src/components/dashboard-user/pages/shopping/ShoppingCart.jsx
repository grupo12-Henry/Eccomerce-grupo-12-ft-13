import React from 'react'
import ShoppingCart from '../../../shoppingCart/ShoppingCart';
import Sidebar from '../../sidebar/Sidebar';
import Footer from '../../../footer/footer';
import './shoppingCart.css'

export default function Compras() {
  return (
    <>
    <Sidebar />
    <div className="componente3">
      <ShoppingCart />
    </div>
    <Footer className="footerdeshopping"/>
    </>
  )
}
