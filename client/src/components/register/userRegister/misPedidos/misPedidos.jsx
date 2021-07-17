import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../../../navbar/navbar";
import Footer from "../../../footer/footer";
import { getpedidosUser } from "../../../../actions/index";

export default function MisPedidos() {
  const dispatch = useDispatch();
  const pedidos = useSelector((state) => state.pedidosUser);

  const [detallePedidos, setdetallePedidos] = useState([]);
  console.log("DALE", detallePedidos);
  useEffect(() => {
    dispatch(getpedidosUser());
  }, [getpedidosUser]);

  useEffect(() => {
    setdetallePedidos(pedidos);
  }, [pedidos]);

  return (
    <>
      <Nav />
      <p>NOMBRE Y APELLIDO</p>
      <p>FECHA</p>
      <p>ESTADO</p>
      <p>TOTAL DE COMPRA</p>
      <Footer />
    </>
  );
}
