import React from 'react'
import GestionProductos from './gestionProductos'
import GestionUsuarios from './gestionUsuarios'
import GestionPedidos from './gestionPedidos'
import {Link} from 'react-router-dom'
// import SideBar from './SideBar';
import { useState } from 'react';

export default function AdminComponent() {

  // const [error, setError] = useState('')
  const [productos, setProductos] = useState(false)
  const [usuarios, setUsuarios] = useState(false)
  const [pedidos, setPedidos] = useState(false)
  const productosHandler = () => {
    setProductos(current => !current)
  }
  const usuariosHandler = () => {
    setUsuarios(current => !current)
  }
  const pedidosHandler = () => {
    setPedidos(current => !current)
  }

  return (
    <div>
        <Link to='/home'><button class="btn btn-primary ml-4 mt-3 btn-sm">Home</button></Link>
        <button class="btn btn-primary ml-4 mt-3 btn-sm" onClick={productosHandler}>Productos</button>
        <button class="btn btn-primary ml-2 mt-3 btn-sm" onClick={usuariosHandler}>Usuarios</button>
        <button class="btn btn-primary ml-2 mt-3 btn-sm" onClick={pedidosHandler}>Pedidos</button>
        {pedidos==true?<GestionPedidos/>:null}
        {usuarios==true?<GestionUsuarios/>:null}
        {productos===true?<GestionProductos/>:null}
    </div>
  )
}
