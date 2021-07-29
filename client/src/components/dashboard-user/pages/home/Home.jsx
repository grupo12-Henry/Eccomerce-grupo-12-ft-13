import React from 'react'
import Home from '../../../home/home';
import './home.css'

export default function Home1({ location }) {
  return (
    <div>
      <div className="homeCSS">
        <Home location={location}/>
      </div>
    </div>
  )
}
