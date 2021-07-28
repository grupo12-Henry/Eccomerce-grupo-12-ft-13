import React from 'react';
import Navbar from '../navbar/navbar';
import Loading from './Loading';
import Footer from '../footer/footer';
import './loadingComponent.css';

export default function LoadingComponent() {
  return (
    <div className="loadingStyle">
      <Navbar />
      <Loading />
    </div>
  )
}
