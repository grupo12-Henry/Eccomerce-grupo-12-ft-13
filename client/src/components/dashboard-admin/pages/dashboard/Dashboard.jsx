import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

export default function Dashboard() {
  const [productos, setProductos] = useState(false);
  const [usuarios, setUsuarios] = useState(false);
  const [pedidos, setPedidos] = useState(false);
  const [mensajes, setMensajes] = useState(false);
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

  return (
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
  );
}
