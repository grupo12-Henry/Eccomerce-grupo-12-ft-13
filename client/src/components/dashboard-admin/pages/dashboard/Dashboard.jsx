import React, { useState, useEffect,  } from "react";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';
import Sidebar from "../../../dashboard-admin/sidebar/Sidebar";
import "./dashboard.css";
import Footer from "../../../footer/footer";
import Loading from "../../loading/LoadingUser";
import {useHistory} from 'react-router-dom'

export default function Dashboard() {
  const [productos, setProductos] = useState(false);
  const [usuarios, setUsuarios] = useState(false);
  const [pedidos, setPedidos] = useState(false);
  const [mensajes, setMensajes] = useState(false);
  const user1=useSelector((state) => state.user);
  console.log(user1)
  const productosHandler = () => {
    setProductos((current) => !current);
  };
  const usuariosHandler = () => {
    setUsuarios((current) => !current);
  };
  const pedidosHandler = () => {
    setPedidos((current) => !current);
  };
  const mensajesHandler = () => {
    setMensajes((current) => !current);
  };

  const [loading, setLoading] = useState(false)
 
	useEffect(() => {
		setTimeout(() => setLoading(true), 400)
	}, [])

  const history = useHistory();

  if(!loading) {
    return (
      <Loading />
    )
  } else {
    if(user1.admin) {
      return (
          <>
            <Sidebar />
        <div className="imgStyle">
          <div className="buttons">
            <a href={"/home"}>
              <button class="btn btn-light btn-lg">Home</button>
            </a>
            <Link to={"/dashboard-admin/productos"}>
                <button class="btn btn-dark btn-lg" onClick={productosHandler}>
                  Productos
                </button>
            </Link>
            <Link to={"/dashboard-admin/usuarios"}>
              <button class="btn btn-dark btn-lg" onClick={usuariosHandler}>
                Usuarios
              </button>
            </Link>
            <Link to={"/dashboard-admin/pedidos"}>
            <div>
              <button class="btn btn-dark btn-lg" onClick={pedidosHandler}>
                Pedidos
              </button>
              </div>
            </Link>
          </div>
        </div>
          <Footer />
          </>
      )
    } else {
      return (
        <div>
          <a href={"/home"} class="btn btn-dark m-5">
            Por favor logueate como admin!!
          </a>
        </div>
      )
    }
  }
}
