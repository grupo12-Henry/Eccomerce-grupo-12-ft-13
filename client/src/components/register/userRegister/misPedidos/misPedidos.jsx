import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../../../navbar/navbar";
import Footer from "../../../footer/footer";
import { getpedidosUser } from "../../../../actions/index";

export default function MisPedidos({ match }) {
  const dispatch = useDispatch();
  const pedidos = useSelector((state) => state.pedidosUser);
  console.log("PEDIDOSYA",pedidos);

  useEffect(() => {
    const orders = () => {
      dispatch(getpedidosUser(match.params.id));
    };
    orders();
  }, [getpedidosUser, dispatch, match.params.id]);

  return (
    <>
      <Nav />

      {pedidos &&
        pedidos[0].orders.map((el) => {
          return <h5>{el.ticket}</h5>;
        })}

      <Footer />
    </>
  );
}
