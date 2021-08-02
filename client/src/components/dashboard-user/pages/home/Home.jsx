import React from 'react'
import Home from '../../../home/home';
import Sidebar from '../../sidebar/Sidebar';
import './home.css'

export default function Home1({ location }) {
  return (
    <div>
        <Sidebar />
      <div className="homeCSS">
        <Home location={location}/>
      </div>
      <div className="fotter">
      </div>
    </div>
  )
}
