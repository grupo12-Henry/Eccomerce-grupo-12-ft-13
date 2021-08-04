import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from '../../../dashboard-user/sidebar/Sidebar';
import Footer from "../../../footer/footer";
import { getpedidosUser, getPedidoDetail, addProductCart, getProducts, repeatOrder } from "../../../../actions/index";
import { Link, useHistory } from "react-router-dom";
import './misPedidos.css'


export default function MisPedidos({ match }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const pedidos = useSelector((state) => state.pedidosUser);
  
  const pedidoDetail = useSelector((state) => state.pedidoDetail);

  // const product = useSelector((state) => state.products);
  const history = useHistory()
  useEffect(() => {
    const dbProducts = () => {
      dispatch(getProducts());
    };
    dbProducts();
  }, [dispatch]);

  useEffect(() => { 
    // dispatch(getpedidosUser(id))
}, []);
  //PEDIDOS ES CLIENTDETAILS DE JULI
  const [ordenes, setOrdenes] = useState();
 // console.log('vamooo emiiii',ordenes)
  // console.log("DETALLE PEDIDO", detallePedido);

  useEffect(() => {
    const orders = () => {
      dispatch(getpedidosUser(match.params.id));
    };
    orders();
  }, [getpedidosUser, dispatch, match.params.id ]);
  // }, [getpedidosUser, dispatch, match.params.id]);

  useEffect(() => {
    const orderSetting = () => {
      setOrdenes(pedidos);
    };
    orderSetting();
  }, [pedidos]);
  // useEffect(() => {
  //   const insertDetail = () => {
  //       dispatch(getPedidoDetail(id))  
  //   };
    
  // }, [pedidos]); 

  const repeatCart=(payload)=>{
    payload.forEach(e=>{
    if(e.order_detail.cantidad> e.stock)e={...e, order_detail:{...e.order_detail, cantidad:e.stock, subTotal:e.stock*e.price}};
    // if (e.stock<1){e=null}
    })
    console.log('payload si cambia', payload)
    payload =  payload.filter(e=>e.stock>0);
    console.log('payload filtrado', payload)
    dispatch(repeatOrder(payload));
    dispatch(getpedidosUser(match.params.id));
    history.push('/home/compras');
    // const timeout = setTimeout(() => {
      // }, 3000);
    // history.push('/compras')
  }
  const insertDetail = (id) => {
    dispatch(getPedidoDetail(id))  
    console.log(pedidoDetail)  
  };
  console.log(products)
  const repeatProduct = (payload) => {
    console.log(products)
    console.log('payload, emi',payload)
    let id = products.find(e=>e.id===payload.productId)
     if(id.stock<1) return alert('no hay suficiente stock');
     if (id.stock<payload.cantidad){ return (payload={...payload, cantidad:id.stock}&&dispatch(addProductCart(payload))  && alert('solo pudimos agregar al carrito la cantidad disponible en stock'))}
    dispatch(addProductCart(payload))  
    // console.log(pedidoDetail)  
  };
  //console.log('pedidos',pedidos)  

  return (
    <>
    <Sidebar />
      <div class="container-fluid">
        {/* <div class="containter mt-05 ml-3 mr-03 mb-3" style={{width: 'inherit'}}> */}
        <div className='row col-12'> 
          <h3 class="mt-03 ml-3 mr-03 mb-3">Ver mis pedidos</h3>
          </div>

          <div className='row col-12'>
            <table
              class="table table-sm table-bordered "
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
                {pedidos?pedidos[0]?.orders.map((el) => {
                  console.log(pedidos,'pedidos')
                  return (
                    <tr>
                      <th scope="row">{el.date?el.date:el.createdAt.split('T')[0]}</th>
                      <td>{el.id}</td>
                      <td>$ {el.bill}</td>
                      <td>
                        <button id='bDetalle'

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
                            id='bConfirmar'
                            class="btn btn-sm btn-info"
                            value={el.id}
                            onClick={(e) => repeatCart(el.products) } 
                          >
                            CONFIRMAR
                          </button>
                        </td>
                    </tr>
                  );
                }):null}
              </tbody>
            </table>
          </div>


             <div className='row col-12'>
              <table
                class="table table-sm table-bordered"
                data-toggle="table"
                data-pagination="true"
                data-search="true"
                data-url="data.json"
              >
              <thead>
                <tr>
                  <th id='tituloImg' scope="col-md 3">IMAGEN</th>
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
                        
                          <td id='colImg'>  
                             <img style={{objectFit: 'scale-down',height: '4rem'}}src={el.image}/>
                            
                          </td>
                        <td><Link to={`/reviews/${el.id}`}>{el.name}</Link></td>
                      <td>{el.order_detail.cantidad}</td>
                      <td>{el.order_detail.subTotal}</td>
                      <td>{el.order_detail.updatedAt.split('T')[0]}</td>
                      <td>
                          <label for="vehicle1"> 
                            <button  id='bAgregar'

                             className='btn btn-sm btn-info'onClick={()=>repeatProduct(el.order_detail)}>agregar al carrito</button>
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

    

      <Footer />
    </>
  );
}