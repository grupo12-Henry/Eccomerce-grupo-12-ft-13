import React from 'react';
import FormCompras from '../../../shoppingCart/FormCompras';
import Sidebar from '../../sidebar/Sidebar';
import './formCompras.css';

export default function formCompras() {
  return (
    <>
      <Sidebar />
      <div className="componenteForm">
        <FormCompras />
      </div>
    </>
  )
}
