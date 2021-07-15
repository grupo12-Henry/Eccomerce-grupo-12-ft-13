import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllPedidos, getPedidosByState, putPedido } from '../../../../actions';

function GestionPedidos() {

    const [pedidos, setPedidos] = useState({  
       
    });

    

    return (
    <div>
        <h2>Pedidos</h2>

        <h3>Ver todos los pedidos</h3>
        <button></button>

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