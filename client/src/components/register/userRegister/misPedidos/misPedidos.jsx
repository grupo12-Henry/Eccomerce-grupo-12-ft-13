import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../../../navbar/navbar";
import Footer from "../../../footer/footer";
import { getpedidosUser, getPedidoDetail } from "../../../../actions/index";

export default function MisPedidos({ match }) {
  const dispatch = useDispatch();
  const pedidos = useSelector((state) => state.pedidosUser);
  const detallePedido = useSelector((state) => state.pedidoDetail);
  const [ordenes, setOrdenes] = useState();

  useEffect(() => {
    const orders = () => {
      dispatch(getpedidosUser(match.params.id));
    };
    orders();
  }, [getpedidosUser, dispatch, match.params.id]);

  useEffect(() => {
    const ordersSet = () => {
      setOrdenes(pedidos);
    };
    ordersSet();
  }, [pedidos]);

  const insertDetail = (e) => {
    dispatch(getPedidoDetail(e.target.value));
    dispatch(getpedidosUser(e.target.value));
  };

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
                  <th scope="col">Repetir compra</th>
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
                            e.preventDefault();
                            insertDetail(e);
                          }}
                        >
                          Ver detalle
                        </button>
                      </td>
                      <td>
                        <button
                          class="btn btn-sm btn-info"
                          value={""}
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          CONFIRMAR
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
                  <th scope="col">IMAGEN</th>
                  <th scope="col">NOMBRE</th>
                  <th scope="col">CANTIDAD</th>
                  <th scope="col">SUBTOTAL</th>
                  <th scope="col">AGREGAR</th>
                </tr>
              </thead>
              <tbody>
                {detallePedido?.products?.map((el) => {
                  return (
                    <tr>
                      <th scope="row">
                        <img style={{ width: "15%" }} src={el.image} />
                      </th>
                      <td>{el.name}</td>
                      <td>{el.order_detail.cantidad}</td>
                      <td>{el.order_detail.subTotal}</td>
                      <td>
                        <label for="vehicle1">
                          AGREGAR
                          <input
                            onChange={"FUNCTION PARA AGREGAR AL CARRITO"}
                            type="checkbox"
                            id="vehicle1"
                            name="vehicle1"
                            value="Bike"
                          ></input>
                        </label>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
