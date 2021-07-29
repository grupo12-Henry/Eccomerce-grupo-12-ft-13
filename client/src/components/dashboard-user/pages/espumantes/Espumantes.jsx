import React from 'react'
import Espumantes from '../../../categories/espumantes/espumantes';
import Sidebar from '../../sidebar/Sidebar';
import './espumantes.css'

export default function Delivery() {
  return (
    <>
      <Sidebar />
      <div className="componente">
        <Espumantes />
      </div>
    </>
  )
}
