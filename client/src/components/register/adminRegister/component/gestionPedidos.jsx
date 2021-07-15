import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllPedidos, getPedidosByState, getPedidoDetail, putPedido } from '../../../../actions';
import Dropdown from 'react-bootstrap/Dropdown';

function GestionPedidos() {

    //Estado de Redux. 
    const pedidos = useSelector(state => state.pedidos);
    const dispatch = useDispatch();

    //Cuando renderiza el componente, me trae todos los pedidos.
    useEffect(async () => { 
        await dispatch(getAllPedidos());
    }, []);

    //Me trae los pedidos por estado. Le pega a una ruta del back u a otra.
    const handlePedidosChange = async(e) => {
        if(e.target.value==='todos'){
            await dispatch(getAllPedidos());
        } else {
            await dispatch(getPedidosByState(e.target.value));
        }
      };

    //Me trae el detalle del pedido.
    const handlePedidoDetail = async(id) => {
        await dispatch(getPedidoDetail(id));
    };  

    //MODIFICA el pedido.
    const handlePedidosSubmit = async() => {
        await dispatch(putPedido());
    };   

    return (
    <div class='container'>
        <h2>Pedidos</h2>
        <h3>Ver pedidos</h3>

        {/* <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" d="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Estado
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <span class="dropdown-item" href="#">Todos</span>
                <span class="dropdown-item" href="#">Pendiente</span>
                <span class="dropdown-item" href="#">Enviado</span>
                <a class="dropdown-item" href="#">Retiro en local</a>
                <a class="dropdown-item" href="#">Cancelado</a>
                <a class="dropdown-item" href="#">Cerrado</a>
            </div>
        </div> */}

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
        <div class="table-responsive">
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
                    </tr>
                </thead>
                <tbody>
                    {
                        pedidos.map(pedido => (
                            <tr>
                            <th scope="row">{pedido.id}</th>
                            <td>{pedido.date}</td>
                            <td>{pedido.paymentMethod}</td>
                            <td>{pedido.bill}</td>
                            <td>{pedido.adress}</td>
                            <td>{pedido.ticket}</td>                            
                            <td>{pedido.state}</td>
                            <td>{pedido.shippingDate}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

        <h3>Ver detalle de un pedido</h3>
        <label>Id: </label>
        <input type='string' placeholder ='Id'/>
        <button onClick={(e) => handlePedidoDetail(e)}>Buscar</button>

        <h3>Modificar un pedido</h3>
        <div>
            <form>
                <label>Monto </label>
                <input type='number' placeholder ='factura'/>
                <label>Fecha </label>
                <input type='text' placeholder='fecha'/>
                <label>Forma de pago </label>
                <input type='text' placeholder='forma de pago'/>
                <label>Dirección </label>
                <input type='text' placeholder='dirección'/>
                <label>Id </label>
                <input type='text' placeholder='ticket'/>
                <label>Id </label>
                <input type='text' placeholder='código postal'/>
                <label>Id </label>
                <input type='number' placeholder='costo de envío'/>
                <label>Id </label>
                <input type='text' placeholder='estado del envío'/>
                <label>Id </label>
                <input type='text' placeholder='numero de guia'/>
                <label>Id </label>
                <input type='text' placeholder='empresa de transporte'/>
                <label>Id </label>
                <input type='number' placeholder='IVA'/>
                <label>Id </label>
                <input type='text' placeholder='situación impositiva'/>
                <label>Id </label>
                <input type='text' placeholder='fecha de envio'/>
                <button onClick={(e) => handlePedidosSubmit(e)}>Confirmar modificación</button>
            </form>
        </div>
    </div>
    )
}

export default GestionPedidos

// const id = req.params.id
// const { bill, date, paymentMethod, adress, ticket, mail ,cost, state, guideNumber, freight, ivaCost, ivaCondition, shippingDate } = req.body