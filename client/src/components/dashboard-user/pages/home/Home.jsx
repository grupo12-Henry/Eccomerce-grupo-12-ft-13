import React from 'react'
import Home from '../../../home/home';

export default function Home1({ location }) {
  return (
    <div>
      <div className="homeCSS">
        <Home location={location}/>
      </div>
    </div>
  )
}
