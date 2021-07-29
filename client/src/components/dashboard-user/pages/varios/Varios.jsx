import React from 'react'
import Varios from '../../../categories/varios/varios';
import Sidebar from '../../sidebar/Sidebar';
import './varios.css'

export default function Delivery() {
  return (
    <>
      <Sidebar />
      <div className="componente">
        <Varios />
      </div>
    </>
  )
}
