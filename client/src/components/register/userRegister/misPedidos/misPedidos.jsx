import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../../../navbar/navbar";
import Footer from "../../../footer/footer";
import { getpedidosUser, getPedidoDetail } from "../../../../actions/index";

export default function MisPedidos({ match }) {
  const dispatch = useDispatch();
  const pedidos = useSelector((state) => state.pedidosUser);
  const detallePedido = useSelector((state) => state.pedidoDetail);
  //PEDIDOS ES CLIENTDETAILS DE JULI
  const [ordenes, setOrdenes] = useState();

  console.log("DETALLE PEDIDO", detallePedido);

  const [detailPedido, setdetailPedido] = useState({
    Imagen: "",
    Producto: "",
    Cantidad: "",
    Subtotal: "",
  });

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
    ordenes?.orders?.map((el) => el.products.map((el) => el))
    // el.image, el.name;
  );

  const insertDetail = (e) => {
    dispatch(getPedidoDetail(e.target.value));
    dispatch(getpedidosUser(e.target.value));
    console.log(e.target.value);
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
                  <th scope="col">REPETIR COMPRA</th>
                </tr>
              </thead>
              <tbody>
                {detallePedido?.products?.map((el) =>
                   {
                    return (
                      <tr>
                        <th scope="row"><img style={{width:'15%'}}src={el.image}/></th>
                        <td>{el.name}</td>
                        {/* { detallePedido?.products?.map((el) => el.order_detail.map() */}
                        <td>500</td>
                        <td>300</td>
                        {/* } */}
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
                        <td>
                          <button
                            class="btn btn-sm btn-info"
                            value={""}
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                          >
                            REPETIR COMPRA
                          </button>
                        </td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/*       {
  "id": 38,
  "date": "HOY",
  "bill": 500,
  "paymentMethod": "PATACONES",
  "clientId": 1,
  "products": [
    {
      "id": 30,
      "stock": 24,
      "name": "Chivas Regal EXTRA 13 Años 750 ml",
      "type": "Whiskys",
      "price": 3315,
      "image": "https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Chivas%20Regal%20EXTRA%2013%20A%C3%B1os%20750%20ml.jpg?alt=media&token=b47c186d-62a5-49c5-91d6-f9590f810435",
      "order_detail": {
        "cantidad": 20,
        "subTotal": 10,
        "orderId": 38,
        "productId": 30
      }
    }
  ]
} */}

      <Footer />
    </>
  );
}
