import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { Button, Form, Col, Row, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from '../loading/Loading';
import { orderPost } from '../../actions';
import { useHistory } from "react-router-dom";
import './FormCompras.css';
// export default function FormCompras (){
    
    
export default function FormCompras() {
     const history = useHistory()
     const user = useSelector((state) => state.user);
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  console.log(user)

    return (
       <div className='containerFormCompras'>
       <Form noValidate validated={validated} onSubmit={handleSubmit}>
         <Row className="mb-3">
           <Form.Group as={Col} md="4" controlId="validationCustom01">
             <Form.Label>Direccion Envio</Form.Label>
             <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue={user.adress?user.adress:'Ingrese la direccion...'}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Direccion Facturacion</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder={user.adress?user.adress:'Ingrese la direccion...'}
              defaultValue={user.adress?user.adress:'Ingrese la direccion...'}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Entregar a:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue={user.name}
            />
            <Form.Control.Feedback>Looks good! SE RE INSPIRARON</Form.Control.Feedback>
          </Form.Group>

          {/* <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
               Por favor elija su nombre de usuario.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group> */}

        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Telefono de contacto</Form.Label>
            <Form.Control type="text" placeholder="(   ) -" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Provincia</Form.Label>
            <Form.Control type="text" placeholder="Provincia" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Codigo Postal</Form.Label>
            <Form.Control type="text" placeholder="Codigo Postal" required />
            <Form.Control.Feedback type="invalid">
              Codigo Postal Invalido.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <span>Forma de Pago: </span>
                    <select class="form-control form-control-sm mt-1 ml-2 form-row" 
                        name="paymentMethod" >
                        {/* // value={} 
                        // onChange={handleInputChange}> */}
                        <option>Tarjeta</option>
                        <option>Efectivo</option>

                    </select>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <span>Tipo de Factura: </span>
                    <select class="form-control form-control-sm mt-1 ml-2 form-row" 
                        name="paymentMethod" >
                        {/* // value={} 
                        // onChange={handleInputChange}> */}
                        <option>Factura A</option>
                        <option>Factura B</option>
                        <option>Consumidor Final</option>

                    </select>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Aceptar Terminos y condiciones"
            feedback="Debes aceptar los terminos y condiciones"
          />
        </Form.Group>
        <Button type="submit">Confirmar Pago</Button>
        <Button type="submit" class='btn btn-primary ml-4'>Volver Carrito</Button>

      </Form>

       </div>
    
    );
  }
  
