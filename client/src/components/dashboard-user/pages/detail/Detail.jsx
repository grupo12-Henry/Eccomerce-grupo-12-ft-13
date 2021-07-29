import React from 'react'
import Detail from '../../../detail/detail';
import Sidebar from '../../sidebar/Sidebar';
import './detail.css'

export default function Delivery({match}) {
  return (
    <>
        <Sidebar />
      <div className="divDelDetail">
        <Detail match={match}/>
      </div>
    </>
  )
}