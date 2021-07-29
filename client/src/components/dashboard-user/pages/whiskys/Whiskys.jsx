import React from 'react'
import Whiskys from '../../../categories/whiskys/whiskys';
import Sidebar from '../../sidebar/Sidebar';
import './whiskys.css'

export default function Delivery() {
  return (
    <>
      <Sidebar />
      <div className="componente">
        <Whiskys />
      </div>
    </>
  )
}
