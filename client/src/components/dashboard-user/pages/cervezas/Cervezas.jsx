import React from 'react'
import Cervezas from '../../../categories/cervezas/cervezas';
import Sidebar from '../../sidebar/Sidebar';
import './cervezas.css'

export default function Delivery() {
  return (
    <>
      <Sidebar />
    <div className="componente">
      <Cervezas />
    </div>
    </>
  )
}
