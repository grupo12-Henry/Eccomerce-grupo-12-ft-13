import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { Button, Form, Col, Row, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from '../loading/Loading';
import { orderPost, Checkout, ClearCart, sendMail } from '../../actions';
import { useHistory } from "react-router-dom";
import './FormCompras.css';
import Nav from '../navbar/navbar';
import NavCategories from '../navCategories/navCategories';
import Footer from '../footer/footer'
// export default function FormCompras (){
    
export default function FormCompras() {
  const dispatch = useDispatch()
     const history = useHistory()
     const cart = useSelector((state) => state.productCart);
     const user = useSelector((state) => state.user);
    const [validated, setValidated] = useState(false);
    const [formCompra, setFormCompra] = useState({direccion:'Retiro en local', pago: 'tarjeta'})

    const handleSubmit = (event) => {
      const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        if(formCompra.pago === 'efectivo'){
          let aux = 0;
          console.log('cart de pago', cart)
          cart?.forEach(e=>  aux = aux + (e.price * e.cantidad))
            let productsArray = cart?.map(el=> 
                          el = {
                          subtotal: el.price * el.cantidad,
                          cantidad: el.cantidad,
                          id: el.id
                          })
            let user =  window.localStorage.getItem("user");
            let completo = user? {
                                  idClient:user.split(',')[0].split(':')[1], 
                                  adress:formCompra.direccion,
                                  paymentMethod: formCompra.pago, 
                                  products: productsArray, 
                                  mail: user.split(',')[6].split(':')[1], 
                                  bill: aux,
                                  
                                } : console.log('user is null');
             if (completo){
               console.log('completo',completo)
                  dispatch(orderPost(completo)) 
                  dispatch(sendMail({mail:completo.mail.slice(1,-1), subject:'compra realizada', text:'Gracias por su compra en VinotecApp, pronto tendra los productos para disfrutarlos con quien guste'})) //req.body.mail, req.body.subject, req.body.text
                  window.localStorage.removeItem('array');
                  window.localStorage.removeItem('pago');
                  dispatch(ClearCart())
                  history.push('/home') //ver este paso, cuando es en efectivo
                  alert('El pedido ha sido confirmado!')

              }
            } else{
      window.localStorage.setItem('pago',JSON.stringify(formCompra))
      dispatch(Checkout(cart));
      // dispatch(orderPost())
        }
    };

    return (<>
      
      <Nav />
       <NavCategories />
       <div className='containerFormCompras'>
       <Form noValidate validated={validated} onSubmit={handleSubmit}>
         <Row className="mb-3">
           <Form.Group as={Col} md="4" controlId="validationCustom01">
             <Form.Label>Direccion Envio</Form.Label>
             <Form.Control
              onChange={(e)=>{ setFormCompra({...formCompra, direccion:e.target.value}); console.log('hola emi')}}
              required
              type="text"
              placeholder="First name"
              defaultValue={user.adress?user.adress:'Ingrese la direccion...'}
            />
            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <span>Forma de Pago: </span>
                    <select  onChange={(e)=>setFormCompra({...formCompra, pago:e.target.value})}
                      class="form-control form-control-sm mt-1 ml-2 form-row" 
                        name="paymentMethod" >
                        <option value='tarjeta'>Tarjeta</option>
                        <option value='efectivo' >Efectivo</option>

                    </select>
          </Form.Group>

        </Row>
        <Row className="mb-3">          
        
        </Row>
        <Form.Group className="mb">
          <Form.Check
            required
            label="Aceptar Terminos y condiciones"
            feedback="Debes aceptar los terminos y condiciones"
          />
        </Form.Group>
        <table 

class="table table-sm table-bordered mt-05 mr-03 mb-3 "
data-toggle="table"
data-pagination="true"
data-search="true"
data-url="data.json">
<thead>
    <tr>
    <th scope="col" data-field="image" data-sortable="true">imagen</th>
    <th scope="col" data-field="name" data-sortable="true" >producto</th>
    <th scope="col" data-field="price" data-sortable="true" >Precio</th>
    <th scope="col" data-field="cantidad" data-sortable="true" >cantidad</th>
    <th scope="col" data-field="subtotal" data-sortable="true" >sub-total</th>
    </tr>
</thead>
<tbody>
    {
        cart?.map(prod => (
            <tr>
            <td className='container-item'><img className='Imagen' src={prod.image} alt='imagen'/></td>
            <td>{prod.name}</td>
            <td>{prod.price}</td>                            
            <td>{prod.cantidad}</td>
            <td>{prod.cantidad*prod.price}</td>
          </tr>
        ))
    }
</tbody>
</table>
        <Button type="submit">Confirmar Pago</Button>
        <Button onClick={()=>(history.push('/compras'))} class='btn btn-primary ml-4'>Volver Carrito</Button>

      </Form>

       </div>
       <Footer />
    );</>)
  }
  
