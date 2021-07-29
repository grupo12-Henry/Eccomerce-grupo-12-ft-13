import React from 'react'
import ShoppingCart from '../../../shoppingCart/ShoppingCart';
import Sidebar from '../../sidebar/Sidebar';
import './shoppingCart.css'

export default function Compras() {
  return (
    <>
    <Sidebar />
    <div className="componente">
      <ShoppingCart />
    </div>
    </>
  )
}
