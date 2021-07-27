import React, { useEffect, useState } from 'react'
import GestionProductos from './gestionProductos'
import GestionUsuarios from './gestionUsuarios'
import GestionPedidos from './gestionPedidos'
import Nav from "../../../navbar/navbar";
import Footer from "../../../footer/footer";
import {Link} from 'react-router-dom'
// import SideBar from './SideBar';
import Loading from '../../../loading/Loading';

export default function AdminComponent() {

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

  const [loading, setLoading] = useState(false)

	useEffect(() => {
		setTimeout(() => setLoading(true), 400)
	}, [])

  if(!loading) {
    return (
      <Loading />
    )
  } else {
    return (
      <div>
        <Nav />
          <Link to='/home'><button class="btn btn-primary ml-4 btn-sm">Home</button></Link>
          <button class="btn btn-primary ml-4 btn-sm" onClick={productosHandler}>Productos</button>
          <button class="btn btn-primary ml-2 btn-sm" onClick={usuariosHandler}>Usuarios</button>
          <button class="btn btn-primary ml-2 btn-sm" onClick={pedidosHandler}>Pedidos</button>
          {pedidos===true?<GestionPedidos/>:null}
          {usuarios===true?<GestionUsuarios/>:null}
          {productos===true?<GestionProductos/>:null}
        {/* <Footer /> */}
      </div>
    )
  }
}
