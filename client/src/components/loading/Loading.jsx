import React from 'react';
// import {Spinner} from 'reactstrap';
import loading from '../../assets/images/winecup.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Loading.css';

export default function Loading() {
  return (
    <div className="fatherDiv">
      <div className="sonDiv">
        <img src={loading} alt='Loading'/>
      </div>
    </div>
  )
}
