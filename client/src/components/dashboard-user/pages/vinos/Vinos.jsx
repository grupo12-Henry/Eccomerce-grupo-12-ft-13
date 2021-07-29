import React from 'react'
import Vinos from '../../../categories/vinos/vinos'
import Sidebar from '../../sidebar/Sidebar'
import './vinos.css'

export default function Delivery() {
  return (
    <>
      <Sidebar />
      <div className="componente">
        <Vinos />
      </div>
    </>
  )
}
