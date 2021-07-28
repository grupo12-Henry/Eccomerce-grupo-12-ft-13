import React from 'react'
import Sidebar from '../sidebar/Sidebar';
import './loadingAdmin.css';
import winecup from '../../loading/winecup.gif';

export default function LoadingAdmin() {
  return (
    <div className="component">
      <Sidebar />
    <div className="img">
      <img src={winecup} alt="Loading" />
    </div>
</div>
  )
}
