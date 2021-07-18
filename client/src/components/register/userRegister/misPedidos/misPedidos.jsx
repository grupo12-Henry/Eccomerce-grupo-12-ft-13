import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../../../navbar/navbar";
import Footer from "../../../footer/footer";
import { getpedidosUser } from "../../../../actions/index";

export default function MisPedidos({ match }) {
  const dispatch = useDispatch();
  const pedidos = useSelector((state) => state.pedidosUser);
  const [ordenes, setOrdenes] = useState();

  useEffect(() => {
    const orders = () => {
      dispatch(getpedidosUser(match.params.id));
    };
    orders();
  }, [getpedidosUser, dispatch, match.params.id]);

  useEffect(() => {
    const pirulo = () => {
      setOrdenes(pedidos);
    };
    pirulo();
  }, [pedidos]);

  console.log(
    "LAS ORDENES",
    ordenes?.orders?.map((el) => el.products.map(el=> el.name))
  );

  const insertDetail = (e) => {
    dispatch(getpedidosUser(e.target.value))
    console.log('EL E',e.target.value)
  }

  return (
    <>
      <Nav />
      <div class="container">
        <div class="containter mt-05 ml-3 mr-03 mb-3">
          <h3 class="mt-03 ml-3 mr-03 mb-3">Ver mis pedidos</h3>
          <div class="table-responsive">
            <table
              class="table table-sm table-bordered mt-05 ml-3 mr-03 mb-3 "
              data-toggle="table"
              data-pagination="true"
              data-search="true"
              data-url="data.json"
            >
              <thead>
                <tr>
                  <th scope="col">Fecha</th>
                  <th scope="col">N° de Pedido</th>
                  <th scope="col">Total</th>
                  <th scope="col">Ver detalle</th>
                </tr>
              </thead>
              <tbody>
                {ordenes?.orders?.map((el) => {
                  return (
                    <tr>
                      <th scope="row">{el.date}</th>
                      <td>{el.id}</td>
                      <td>{el.bill}</td>
                      <td>
                        <button
                          class="btn btn-sm btn-info"
                          value={el.id}
                          onClick={(e) => {
                            e.preventDefault(); insertDetail(e);
                          }}
                        >
                          Ver detalle
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              </table>

              <table
              class="table table-sm table-bordered mt-05 ml-3 mr-03 mb-3 "
              data-toggle="table"
              data-pagination="true"
              data-search="true"
              data-url="data.json"
            >
              <thead>
                <tr>
                  <th scope="col">NOMBRE</th>
                  <th scope="col">CANTIDAD</th>
                  <th scope="col">SUBTOTAL</th>
                  <th scope="col">AGREGAR</th>
                </tr>
              </thead>
              <tbody>
                {ordenes?.orders?.map((el) => el.products.map((el)=> {
                  return (
                    <tr>
                      <th scope="row">{el.name}</th>
                      <td>{el.cantidad}</td>
                      <td>{el.subtotal}</td>
                      <td>
                        <button
                          class="btn btn-sm btn-info"
                          value={ordenes.orders.id}
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          REPETIR COMPRA
                        </button>
                      </td>
                    </tr>
                  )}
                ))}

              </tbody>
              </table>

               

          </div>
        </div>
      </div>

      {/*       <span>{ordenes?.orders?.map(el => el.clientId)}</span>
      <span>{ordenes?.orders?.map(el => el.date)}</span>
      <span>{ordenes?.orders?.map(el => el.date)}</span> */}

      <Footer />
    </>
  );
}
