import React from 'react'
import './loadingAdmin.css';
import winecup from '../../loading/winecup.gif';

export default function LoadingAdmin() {
  return (
    <div className="component">
    <div className="img">
      <img src={winecup} alt="Loading" />
    </div>
    </div>
  )
}
