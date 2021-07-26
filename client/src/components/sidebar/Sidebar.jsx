import React from 'react';
import './Style.css';
import {SidebarData} from './SidebarData';
// import Navbar from '../navbar/navbar';

function adminSidebar() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="Sidebar">
        <ul className='SidebarList'>
          {SidebarData.map((val, key) => {
            return (
              <li key={key} className='row' onClick={()=>{window.location.pathname = val.link}}>
                <div id='icon'>{val.icon}</div>
                <div id='title'>{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  )
}

export default adminSidebar;
