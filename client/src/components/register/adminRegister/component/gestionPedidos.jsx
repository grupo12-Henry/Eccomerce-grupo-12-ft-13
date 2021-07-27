
import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllPedidos, getPedidosByState, getPedidoDetail, putPedido } from '../../../../actions';

function GestionPedidos() {

    //Estado de Redux. 
    const pedidos = useSelector(state => state.pedidos);
    const pedidoDetail = useSelector(state => state.pedidoDetail);
    const dispatch = useDispatch();

    useEffect(() => { 
        console.log(pedidoDetail);
    }, [pedidoDetail]);

    //Cuando renderiza el componente, me trae todos los pedidos.
    useEffect(() => { 
        dispatch(getAllPedidos());
    }, []);

    //Me trae los pedidos por estado. Le pega a una ruta del back o a otra.
    const handlePedidosChange = (e) => {
        if(e.target.value==='todos'){
            dispatch(getAllPedidos());
        } else {
            dispatch(getPedidosByState(e.target.value));
        }
      };

    //Me trae el detalle del pedido.
    const handlePedidoDetail = async(e) => {
        dispatch(getPedidoDetail(e.target.value));
    };  

    //MODIFICA el pedido.
    const handlePedidosSubmit = (e) => {
        // console.log(pedidoDetail.id, modifyPedido)
        if(window.confirm('¿Esta seguro de que desea modificar este pedido?')) {
            dispatch(putPedido(pedidoDetail.id, modifyPedido));
        } 
    };   

    //Estado local de los campos que MODIFICAN un pedido. 
    const [modifyPedido, setModifyPedido] = useState({
        clientId:"",
        date:"",
        bill:"",
        paymentMethod:"",
        ticket:"",
        adress:"",
        mail:"",
        shippingDate:"",
        state:"",
        cost:"",
        guideNumber:"",
        freight:"",
        ivaCost:"",
        ivaCondition:"",
        
    });
    //Es como un handlechange de modifyPedido. Maneja el estado local. 
    const handleInputChange = (e) => {
        setModifyPedido({
          ...modifyPedido,
          [e.target.name]:e.target.value
        });
    }
    //Trae la información del detalle del pedido seleccionado al estado de Redux "pedidoDetail"
    const insertPedidoInfo = (e) => {
        dispatch(getPedidoDetail(e.target.value));
    }




    const handleEmailSend = (e) => {
        return
    }






    return (
    <div class="container ml-5" className='jah287'>
        <h3 class="ml-05">Ver pedidos</h3>
        {/* Boton que filtra por estado */}
        <label>Ver estados: </label>
        <select name="Orders" id='Orders' class='ml-3' onChange={(e) => handlePedidosChange(e)}>
            <option key='todos' value='todos'>Todos</option>
            <option key='pendientes' value='pendiente'>Pendientes</option>
            <option key='enviados' value='enviado'>Enviados</option>
            <option key='retiro' value='retiro'>Retiro en local</option>
            <option key='cancelado' value='cancelado'>Cancelado</option>
            <option key='cerrado' value='cerrado'>Cerrado</option>
        </select>

        {/* Tabla de pedidos */}
        <div class="table-responsive container">
            <table 
                class="table table-sm table-bordered mt-2 "
                data-toggle="table"
                data-pagination="true"
                data-search="true"
                data-url="data.json">
                <thead>
                    <tr>
                    <th scope="col" data-field="id" data-sortable="true" >N°</th>
                    <th scope="col" data-field="date" data-sortable="true" >Fecha de compra</th>
                    <th scope="col" data-field="paymentMethod" data-sortable="true" >Forma de Pago</th>
                    <th scope="col" data-field="bill" data-sortable="true" >Total</th>
                    <th scope="col" data-field="adress" data-sortable="false" >Dirección</th>
                    <th scope="col" data-field="ticket" data-sortable="false" >Ticket</th>
                    <th scope="col" data-field="state" data-sortable="true" >Estado del envio</th>
                    <th scope="col" data-field="shippingDate" data-sortable="true" >Fecha de envio</th>
                    <th scope="col" data-field="details" data-sortable="true" >Detalle</th>
                    <th scope="col" data-field="modify" data-sortable="true" >Modificar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pedidos&& pedidos.map(pedido => (
                            <tr>
                            <th scope="row">{pedido.id}</th>
                            <td>{pedido.date}</td>
                            <td>{pedido.paymentMethod}</td>
                            <td>{pedido.bill}</td>
                            <td>{pedido.adress}</td>
                            <td>{pedido.ticket}</td>
                            <td>{pedido.state}</td>
                            <td>{pedido.shippingDate}</td>
                            <td >
                                <button class="btn btn-sm btn-info" value={pedido.id} onClick={(e) => { e.preventDefault(); handlePedidoDetail(e)}} >
                                    Ver detalle
                                </button>
                            </td>
                            <td >
                                <button class="btn btn-sm btn-info" value={pedido.id} onClick={(e) => { e.preventDefault(); insertPedidoInfo(e)}} >
                                    Modificar
                                </button>
                            </td>
                            </tr>
                        )) 
                    }
                </tbody>
            </table>
        </div>

        {/* Tabla que muestra el Detalle de un Pedido */}

        <div>
        <h3>Ver detalle de un pedido</h3>
        <div class='container form-row mt-3' >
            <form >
            <ol>
                <li class='form-inline'><span>Pedido Numero: </span>{pedidoDetail&&
                <input class="form-control form-control-sm mt-1 ml-2 form-row"                        
                        name='name'
                        value={pedidoDetail.id}></input>}
                </li>

                <li class='form-inline'><span>Cliente Numero: </span>{pedidoDetail&&
                <input class="form-control form-control-sm mt-1 ml-2 form-row"                        
                        name='name'
                        value={pedidoDetail.clientId}></input>}
                </li>


                <li class='form-inline'><span>Fecha de compra: </span>{pedidoDetail&&
                <input class="form-control form-control-sm mt-1 ml-2 form-row"                        
                        name='name'
                        value={pedidoDetail.date}></input>}
                </li>


                <li class='form-inline'><span>Total: </span>{pedidoDetail&&
                <input class="form-control form-control-sm mt-1 ml-2 form-row"                        
                        name='name' 
                        value={pedidoDetail.bill}></input>}
                </li>


                <li class='form-inline'><span>Forma de Pago: </span>{pedidoDetail&&(
                <input class="form-control form-control-sm mt-1 ml-2 form-row"                        
                        name='name' 
                        value={pedidoDetail.paymentMethod}></input>)}
                </li>


                <li class='form-inline'><span>Ticket: </span>{pedidoDetail&&
                (<input class="form-control form-control-sm mt-1 ml-2 form-row"                        
                        name='name' 
                        value={pedidoDetail.ticket}></input>)}
                </li>

                {/* Por cada producto del pedido trae una linea con nombre, cantidad y subtotal */}

                { pedidoDetail&&pedidoDetail?.products?.map (el => (     
                    <li class='form-inline'>

                        <span> Producto: </span>
                        <input class="form-control form-control-sm mt-1 ml-2 form-row"                        
                            name='name'
                            value={el.name}>
                        </input>

                        <span class="mt-2 ml-3"> Cantidad: </span>
                        <input class="form-control form-control-sm mt-1 ml-2 form-row"                        
                            name='name'
                            value={el.order_detail.cantidad}>
                        </input>

                        <span class="mt-2 ml-3"> SubTotal: </span>
                        <input class="form-control form-control-sm mt-1 ml-2 form-row"                        
                            name='name'
                            value={el.order_detail.subTotal}>
                        </input>

                    </li>
                ))}


                <li class='form-inline'><span>Dirección de envio: </span>{pedidoDetail&&
                (<input class="form-control form-control-sm mt-1 ml-2 form-row"                        
                        name='name'
                        value={pedidoDetail.adress}></input>)}
                </li>


                <li class='form-inline'><span>Cod.Postal: </span>{pedidoDetail&&
                (<input class="form-control form-control-sm mt-1 ml-2 form-row"                        
                        name='name'
                        value={pedidoDetail.mail}></input>)}
                </li>


                <li class='form-inline'><span>Fecha de envio: </span>{pedidoDetail&&
                <input class="form-control form-control-sm mt-1 ml-2 form-row"                        
                        name='name'
                        value={pedidoDetail.shippingDate}></input>}
                </li>


                <li class='form-inline'><span>Estado del envio: </span>{pedidoDetail&&
                <input class="form-control form-control-sm mt-1 ml-2 form-row"                        
                        name='name'
                        value={pedidoDetail.state}></input>}
                </li>


                <li class='form-inline'><span>Costo de envio: </span>{pedidoDetail&&
                <input class="form-control form-control-sm mt-1 ml-2 form-row"                        
                        name='name'
                        value={pedidoDetail.cost}></input>}
                </li>


                <li class='form-inline'><span>N° de guia: </span>{pedidoDetail&&
                <input class="form-control form-control-sm mt-1 ml-2 form-row"                        
                        name='name' 
                        value={pedidoDetail.guideNumber}></input>}
                </li>


                <li class='form-inline'><span>Transportista: </span>{pedidoDetail&&
                <input class="form-control form-control-sm mt-1 ml-2 form-row"                        
                        name='name' 
                        value={pedidoDetail.freight}></input>}
                </li>


                <li class='form-inline'><span>IVA: </span>{pedidoDetail&&
                <input class="form-control form-control-sm mt-1 ml-2 form-row"                        
                        name='name' 
                        value={pedidoDetail.ivaCost}></input>}
                </li>


                <li class='form-inline'><span>Situación impositiva: </span>{pedidoDetail&&
                <input class="form-control form-control-sm mt-1 ml-2 form-inline"                        
                        name='name' 
                        value={pedidoDetail.ivaCondition}></input>}</li>
            </ol>
            </form>
        </div>

        {/* Formulario para modificar un pedido */}

        <h3>Modificar un pedido</h3>
        <div class='container form-row mt-3' >
            <form onSubmit={(e) => handlePedidosSubmit(e)}>
                <ol>

                <li class='form-inline'>
                    <span>Pedido Numero: </span>
                    <input class="form-control form-control-sm mt-1 ml-2 form-row"
                        name='id' 
                        type='text' 
                        value={pedidoDetail?.id} />
                </li>
                <li class='form-inline'>
                    <span>Cliente Numero: </span>
                    <input class="form-control form-control-sm mt-1 ml-2 form-row" 
                        name='clientId' 
                        type='number' 
                        placeholder={pedidoDetail?.clientId} 
                        value={ modifyPedido.clientId} 
                        onChange={handleInputChange}/>
                </li>
                <li class='form-inline'>
                    <span>Fecha de compra: </span>
                    <input class="form-control form-control-sm mt-1 ml-2 form-row" 
                        name='date' 
                        type='text' 
                        placeholder={pedidoDetail?.date} 
                        value={modifyPedido.date} 
                        onChange={handleInputChange}/>
                </li>
                <li class='form-inline'>
                    <span>Total: </span>
                    <input class="form-control form-control-sm mt-1 ml-2 form-row" 
                        name='bill' 
                        type='number' 
                        placeholder={pedidoDetail?.bill} 
                        value={modifyPedido.bill} 
                        onChange={handleInputChange}/>
                </li>
                <li class='form-inline'>
                    <span>Forma de Pago: </span>
                    <select class="form-control form-control-sm mt-1 ml-2 form-row" 
                        name="paymentMethod" 
                        // value={modifyPedido.paymentMethod} 
                        onChange={handleInputChange}>

                        <option key='tarjeta' value='tarjeta'>Tarjeta</option>
                        <option key='efectivo' value='efectivo'>Efectivo</option>

                    </select>
                </li>
                <li class='form-inline'>
                    <span>Ticket: </span>
                    <input class="form-control form-control-sm mt-1 ml-2 form-row" 
                        name='ticket' 
                        type='text' 
                        placeholder={pedidoDetail?.ticket } 
                        value={modifyPedido.ticket} 
                        onChange={handleInputChange}/>
                </li>


                {/* { pedidoDetail.products.map (el => (     
                <li class='form-inline'>
                    <label>Producto: </label>
                    <input                       
                        name='name' 
                        value={el.name}>
                        placeholder={pedidoDetail.ticket }
                    </input> 
                        <label class="mt-2 ml-5">Cantidad: </label>
                        <input class="form-control mt-2 ml-5 form-row"  
                        type='number'                      
                        name='name' 
                        value={el.order_detail.cantidad}></input>
                        <label class="mt-2 ml-5">SubTotal: </label>
                        <input class="form-control mt-2 ml-5 form-row"                        
                        type='number'    
                        name='name' 
                        value={el.order_detail.subTotal}></input>
                </li>
                      
                       
                ))} */}

                <li class='form-inline'>
                    <span>Dirección de envio: </span>
                    <input class="form-control form-control-sm mt-1 ml-2 form-row" 
                        name='adress' 
                        type='text' 
                        placeholder={pedidoDetail?.adress} 
                        value={modifyPedido.adress} 
                        onChange={handleInputChange}/>
                </li>
                <li class='form-inline'>
                    <span>Cód. Postal: </span>
                    <input class="form-control form-control-sm mt-1 ml-2 form-row" 
                        name='mail' 
                        type='text' 
                        placeholder={pedidoDetail?.mail} 
                        value={modifyPedido.mail} 
                        onChange={handleInputChange}/>
                </li>
                <li class='form-inline'>
                    <span>Fecha de envio: </span>
                    <input class="form-control form-control-sm mt-1 ml-2 form-row" 
                        name='shippingDate' 
                        type='text' 
                        placeholder={pedidoDetail?.shippingDate} 
                        value={modifyPedido.shippingDate} 
                        onChange={handleInputChange}/>
                </li>
                <li class='form-inline'>
                    <span>Estado del envio: </span>            
                    <select class="form-control form-control-sm mt-1 ml-2 form-row" 
                        name="state" 
                        onChange={handleInputChange}>

                        <option key='pendiente' value='pendiente'>Pendiente</option>
                        <option key='enviado' value='enviado'>Enviado</option>
                        <option key='retiro' value='retiro en local'>Retiro en local</option>
                        <option key='cancelado' value='cancelado'>Cancelado</option>
                        <option key='cerrado' value='cerrado'>Cerrado</option>

                    </select>
                </li>
                <li class='form-inline'>
                    <span>Costo de envio: </span>
                    <input class="form-control form-control-sm mt-1 ml-2 form-row" 
                        name='cost' 
                        type='number' 
                        placeholder={pedidoDetail?.cost} 
                        value={modifyPedido.cost} 
                        onChange={handleInputChange}/>
                </li>
                <li class='form-inline'>
                    <span>N° de guia: </span>
                    <input class="form-control form-control-sm mt-1 ml-2 form-row" 
                        name='guideNumber' 
                        type='text' 
                        placeholder={pedidoDetail?.guideNumber} 
                        value={modifyPedido.guideNumber} 
                        onChange={handleInputChange}/>
                </li>
                <li class='form-inline'>
                    <span>Transportista: </span>
                    <input class="form-control form-control-sm mt-1 ml-2 form-row" 
                        name='freight' 
                        type='text' 
                        placeholder={pedidoDetail?.freight} 
                        value={modifyPedido.freight} 
                        onChange={handleInputChange}/>
                </li>
                <li class='form-inline'>
                    <span>IVA: </span>
                    <input class="form-control form-control-sm mt-1 ml-2 form-row" 
                        name='ivaCost' 
                        type='number' 
                        placeholder={pedidoDetail?.ivaCost} 
                        value={modifyPedido.ivaCost} 
                        onChange={handleInputChange}/>
                </li>
                <li class='form-inline'>
                    <span>Situación impositiva: </span>
                    <input class="form-control form-control-sm mt-1 ml-2 form-row" 
                        name='ivaCondition' 
                        type='text' 
                        placeholder={pedidoDetail?.ivaCondition} 
                        value={modifyPedido.ivaCondition} 
                        onChange={handleInputChange}/>
                </li>
                </ol>

                <button class="btn btn-primary btn-block mt-2 mb-9"
                    onClick={(e) => { handlePedidosSubmit(e)}}>
                        Confirmar modificación
                </button>
                <button onClick={(e) => { handleEmailSend(e)}}>
                    Confirmar Mail
                </button>
            </form>
        </div>
        </div>
    </div>
    )
}

export default GestionPedidos
