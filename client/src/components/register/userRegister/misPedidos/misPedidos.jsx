import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../../../navbar/navbar";
import Footer from "../../../footer/footer";
import { getpedidosUser, getPedidoDetail, addProductCart, getProducts } from "../../../../actions/index";

export default function MisPedidos({ match }) {
  const dispatch = useDispatch();
  const pedidos = useSelector((state) => state.pedidosUser);
  const pedidoDetail = useSelector((state) => state.pedidoDetail);
  // const product = useSelector((state) => state.products);
  useEffect(() => {
    const dbProducts = () => {
      dispatch(getProducts());
    };
    dbProducts();
  }, [dispatch]);

  useEffect(() => { 
}, [pedidoDetail]);
  //PEDIDOS ES CLIENTDETAILS DE JULI
  const [ordenes, setOrdenes] = useState();

  useEffect(() => {
    const orders = () => {
      dispatch(getpedidosUser(match.params.id));
    };
    orders();
  }, [getpedidosUser, dispatch, match.params.id]);

  useEffect(() => {
    const orderSetting = () => {
      setOrdenes(pedidos);
    };
    orderSetting();
  }, [pedidos]);


  const insertDetail = (id) => {
    dispatch(getPedidoDetail(id))  
  };
  const repeatProduct = (payload) => {
    dispatch(addProductCart(payload))  
  };

  return (
    <>
      <Nav />
      <div class="container">
        <div class="containter mt-05 ml-3 mr-03 mb-3" style={{width: 'inherit'}}>
          <h3 class="mt-03 ml-3 mr-03 mb-3">Ver mis pedidos</h3>
          <div class="table-responsive" style={{overflow: 'hidden', textAlign:'center'}}>
            <table
              class="table table-sm table-bordered mt-05 ml-3 mr-03 mb-3 "
              data-toggle="table"
              data-pagination="true"
              data-search="true"
              data-url="data.json"
            >
              <thead>
                <tr>
                  <th scope="col">FECHA</th>
                  <th scope="col">N° PEDIDO</th>
                  <th scope="col">TOTAL</th>
                  <th scope="col">VER DETALLE</th>
                  <th scope="col">REPETIR COMPRA</th>
                </tr>
              </thead>
              <tbody>
                {pedidos[0]?pedidos[0].orders.map((el) => {
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
                            insertDetail(el.id)
                          }}
                        >
                          Ver detalle
                        </button>
                      </td>
                      <td>
                          <button
                            class="btn btn-sm btn-info"
                            value={el.id}
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                          >
                            CONFIRMAR
                          </button>
                        </td>
                    </tr>
                  );
                }):null}
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
                  <th scope="col-md 3">IMAGEN</th>
                  <th scope="col">NOMBRE</th>
                  <th scope="col">CANTIDAD</th>
                  <th scope="col">SUBTOTAL</th>
                  <th scope="col">FECHA</th>
                  <th scope="col">AGREGAR</th>
                  
                </tr>
              </thead>
              <tbody>
                {pedidoDetail?.products?.map((el) =>
                   {
                    return (
                      <tr>
                        <th scope="row" style={{width: '20%'}}><img style={{width:'25%'}}src={el.image}/></th>
                        <td>{el.name}</td>
                      <td>{el.order_detail.cantidad}</td>
                      <td>{el.order_detail.subTotal}</td>
                      <td>{el.order_detail.updatedAt.split('T')[0]}</td>
                      <td>
                          <label for="vehicle1">
                            <button onClick={()=>repeatProduct(el.order_detail)}>agregar al carrito</button>
                            {/* <input
                              style={{marginLeft:'10%'}}
                              onChange={"FUNCTION PARA AGREGAR AL CARRITO"}
                              type="checkbox"
                              id="vehicle1"
                              name={el.order_detail.id}
                              value={el.order_detail.id}
                            ></input> */}
                          </label>
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

    

      <Footer />
    </>
  );
}