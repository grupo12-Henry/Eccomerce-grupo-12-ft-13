import React from 'react';
import loading from '../../assets/images/winecup.gif';
import './Loading.css';

export default function Loading() {
  return (
    <div className="sonDiv">
      <img src={loading} alt='Loading'/>
    </div>
  )
}
