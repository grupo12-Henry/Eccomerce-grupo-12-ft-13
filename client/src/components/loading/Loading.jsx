import React from 'react';
import winecup from './winecup.gif';
import './Loading.css';

export default function LoadingComponent() {
  return (
    <div className="component">
        <div className="img">
          <img src={winecup} alt="Loading" />
        </div>
    </div>
  )
}
