import React from 'react'
import Detail from '../../../detail/detail';
import Sidebar from '../../sidebar/Sidebar';
import './detail.css'
import Footer from '../../../footer/footer'

export default function Delivery({match}) {
  return (
    <div>
        <Sidebar />
      <div className="divDelDetail">
        <Detail match={match}/>
      </div>
      <div className="fotter">
        <Footer />
      </div>
    </div>
  )
}
