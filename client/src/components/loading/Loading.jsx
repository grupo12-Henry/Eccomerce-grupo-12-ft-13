import React from 'react';
import Navbar from '../navbar/navbar';
import winecup from './winecup.gif';
import './loading.css';

export default function LoadingComponent() {
  return (
    <div className="component">
        <Navbar />
        <div className="img">
          <img src={winecup} alt="Loading" />
        </div>
    </div>
  )
}
