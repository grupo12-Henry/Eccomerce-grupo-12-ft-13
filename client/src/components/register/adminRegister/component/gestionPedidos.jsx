import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllPedidos, getPedidosByState, putPedido } from '../../../../actions';

function GestionPedidos() {

    const pedidos = useSelector(state => state.pedidos)
    const dispatch = useDispatch()

    useEffect(async () => { 
        await dispatch(getAllPedidos());
        console.log(pedidos)
    }, []);


    

    return (
    <div>
        <h2>Pedidos</h2>

        <h3>Ver todos los pedidos</h3>
        <div class="table-responsive">
            <table class="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">N°</th>
                    <th scope="col">Factura</th>
                    <th scope="col">Fecha de compra</th>
                    <th scope="col">Forma de Pago</th>
                    <th scope="col">Dirección</th>
                    <th scope="col">Ticket</th>
                    <th scope="col">Cod. Postal</th>
                    <th scope="col">Costo de envio</th>
                    <th scope="col">Estado del envio</th>
                    <th scope="col">N° de guia</th>
                    <th scope="col">Empresa de transporte</th>
                    <th scope="col">IVA</th>
                    <th scope="col">Situación impositiva</th>
                    <th scope="col">Fecha de envio</th>
                    </tr>
                </thead>
                <tbody>

                            <th scope="row">1</th>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>4</td>
                            <td>4</td>

                    {/* {
                        pedidos.map(pedido => {
                            <tr>
                            <th scope="row">{pedido.id}</th>
                            <td>{pedido.bill}</td>
                            <td>{pedido.date}</td>
                            <td>{pedido.paymentMethod}</td>
                            <td>{pedido.adress}</td>
                            <td>{pedido.ticket}</td>
                            <td>{pedido.mail}</td>
                            <td>{pedido.cost}</td>
                            <td>{pedido.state}</td>
                            <td>{pedido.guideNumber}</td>
                            <td>{pedido.freight}</td>
                            <td>{pedido.ivaCost}</td>
                            <td>{pedido.ivaCondition}</td>
                            <td>{pedido.shippingDate}</td>
                            </tr>
                        })
                    } */}
                </tbody>
            </table>
        </div>

        <h3>Modificar un pedido</h3>
        <form>
            <input type='number' placeholder ='factura'/>
            <input type='text' placeholder='fecha'/>
            <input type='text' placeholder='forma de pago'/>
            <input type='text' placeholder='dirección'/>
            <input type='text' placeholder='ticket'/>
            <input type='text' placeholder='código postal'/>
            <input type='number' placeholder='costo de envío'/>
            <input type='text' placeholder='estado del envío'/>
            <input type='text' placeholder='numero de guia'/>
            <input type='text' placeholder='empresa de transporte'/>
            <input type='number' placeholder='IVA'/>
            <input type='text' placeholder='situación impositiva'/>
            <input type='text' placeholder='fecha de envio'/>
            <button onClick={()=>{ }}/>
        </form>
    </div>
    )
}

export default GestionPedidos

// const id = req.params.id
// const { bill, date, paymentMethod, adress, ticket, mail ,cost, state, guideNumber, freight, ivaCost, ivaCondition, shippingDate } = req.body