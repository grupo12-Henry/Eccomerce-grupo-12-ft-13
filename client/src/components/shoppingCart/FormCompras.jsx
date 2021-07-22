// import React from 'react';
// // import { checkOut, completeshopCart, dbSync, updateOrder } from '../redux/actions';
// import { connect } from 'react-redux';
// // import style from './Checkout.module.css';
// import { useState } from 'react';
// import { Redirect } from 'react-router-dom';

// export function Checkout(props) {
//     // const {name, surname} = props;
//     // const {articles, id} = props;
//     const [input, setInput] = useState({
//         mail: "",
//         calle: "",
//         numero: "",
//         departamento: "",
//         ciudad: "",
//         cp: "",
//         provincia: "",
//         pais: ""
//     });

//     const handleInputChange = function(e) {
//         setInput({
//         ...input,
//         [e.target.name]: e.target.value
//         });
//     }

//     const handleCheckout = (input) => {
    
//         var url = `http://localhost:3001/checkout`;
//         var data = {
//             emailShipment: input.emailShipment,
//             street: input.street,
//             number: input.number,
//             apartment: input.apartment,
//             city: input.city,
//             cp: input.cp,
//             province: input.province,
//             country: input.country,
//             name: props.user.name,
//             surname: props.user.surname,
//             articles: props.shopCart.articles,
//             id: props.shopCart.id
//         };
        
//         fetch(url, {
//             method: 'POST',
//             body: JSON.stringify(data),
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             credentials: 'include'
//         }).then(r => r.json())

//         var url2 = `http://localhost:3001/orders/${props.shopCart.id}`;
//         var data = {
//             status: 'processing'
//         };
//         fetch(url2, {
//             method: 'PUT',
//             body: JSON.stringify(data),
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             credentials: 'include'
//         }).then(res => res.json())
//         .then((json)=>{
//             console.log(json)
//             props.completeshopCart()
//             window.location.replace('http://localhost:3000/products')

//         })
           
//         .catch(err => console.log(err))
//     }

//     const handleSubmit = function(e) {
//         e.preventDefault();
//     }
    
//     return (
//         <div id="checkout" className="container" className={`${style.container}`}>
//         <div className="py-5 text-center">
//             <h1>Check out</h1>
//         </div>
//         <div className="row">
//             <div className="col-md-12 order-md-1">
//                 <form className={`${style.form}`} onSubmit={handleSubmit} className="needs-validation" novalidate>

//                     <hr className="mb-4" />
//                         <h4 className="mb-3">Correo electrónico: </h4>
//                         <div className="row" className={`${style.emailShipment}`}>
//                             <div className="col-md-6 mb-3">
//                             <input onChange={handleInputChange} type="email" name="emailShipment" className="form-control" id="emailShipment" placeholder="Correo electrónico..." value={input.emailShipment} required/>
//                                 <div className="invalid-feedback">
//                                     Campo obligatorio.
//                                 </div> 
//                             </div>
//                         </div>

//                     <hr className="mb-4" />
//                         <h4 className="mb-3">Dirección de envío: </h4>
//                         <div className="row">
//                             <div className="col-md-6 mb-3">
//                                 <label for="street">Calle: </label>
//                                 <input onChange={handleInputChange} type="text" name="street" className="form-control" id="street" placeholder="Calle..." value={input.street} required />
//                                 <div className="invalid-feedback">
//                                     Campo obligatorio.
//                                 </div>
//                             </div>

//                             <div className="col-md-2 mb-3">
//                                 <label for="number">Número: </label>
//                                 <input onChange={handleInputChange} type="number" name="number" className="form-control" id="number" placeholder="Número..." value={input.number} required />
//                                 <div className="invalid-feedback">
//                                     Campo obligatorio.
//                                 </div>
//                             </div>

//                             <div className="col-md-4 mb-3">
//                                 <label for="apartment">Departamento: <span className="text-muted">(Opcional)</span></label>
//                                 <input onChange={handleInputChange} type="number" name="apartment" className="form-control" id="apartment" placeholder="Departamento..." value={input.apartment}/>
//                             </div>

//                         </div>

//                         <div className="row">
//                             <div className="col-md-6 mb-3">
//                                 <label for="city">Ciudad: </label>
//                                 <input onChange={handleInputChange} type="text" name="city" className="form-control" id="city" value={input.city} placeholder="Ciudad..." required />
//                                 <div className="invalid-feedback">
//                                     Campo obligatorio.
//                                 </div>
//                             </div>

//                             <div className="col-md-3 mb-3">
//                                 <label for="cp">Código Postal: </label>
//                                 <input onChange={handleInputChange} type="number" name="cp" className="form-control" id="cp" placeholder="Código Postal..." value={input.cp} required />
//                                 <div className="invalid-feedback">
//                                     Campo obligatorio.
//                                 </div>
//                             </div>

//                             <div className="col-md-6 mb-3">
//                                 <label for="province">Provincia: </label>
//                                 <input onChange={handleInputChange} type="text" name="province" className="form-control" id="province" value={input.province} placeholder="Provincia..." required />
//                                 <div className="invalid-feedback">
//                                     Campo obligatorio.
//                                 </div>
//                             </div>

//                             <div className="col-md-6 mb-3">
//                                 <label for="country">País: </label>
//                                 <input onChange={handleInputChange} type="text" name="country" className="form-control" id="country" value={input.country} placeholder="País..." required />
//                                 <div className="invalid-feedback">
//                                     Campo obligatorio.
//                                 </div>
//                             </div>
//                         </div>

//                     <hr className="mb-4" />
//                         <h4 className="mb-3">Forma de pago: </h4>
//                             <div className={`${style.pago}`}>
//                                 <div className="custom-control custom-radio">
//                                     <input type="radio" className="custom-control-input" id="efectivo" name="groupOfDefaultRadios" defaultChecked/>
//                                     <label className="custom-control-label" for="efectivo"> Efectivo </label>
//                                 </div>

//                                 <div className="custom-control custom-radio">
//                                     <input type="radio" className="custom-control-input" id="debito" name="groupOfDefaultRadios"/>
//                                     <label className="custom-control-label" for="debito"> Tarjeta de Débito </label>
//                                 </div>

//                                 <div className="custom-control custom-radio">
//                                     <input type="radio" className="custom-control-input" id="credito" name="groupOfDefaultRadios"/>
//                                     <label className="custom-control-label" for="credito"> Tarjeta de Crédito </label>
//                                 </div>
//                             </div>

//                         <hr className="mb-4" />
//                             <button type="submit" className="btn btn-success btn-lg btn-rounded" onClick={() => handleCheckout(input)}>Comprar!</button>
//                         <hr className="mb-4" />
//                     </form>
//                 </div>
//             </div>
//             </div>

//     )

// }

// function mapStateToProps(state) {
//     return {
//         shopCart:state.shopCart,
//         user: state.user,
//         order: state.order
//     };
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         completeshopCart:()=> dispatch(completeshopCart())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Checkout);





// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom';
// import { Button, Form, Col, Row, InputGroup } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import Loading from '../loading/Loading';
// import { orderPost } from '../../actions';
// import { useHistory } from "react-router-dom";

// // export default function FormCompras (){
    
    
// export default function FormCompras() {
//      const history = useHistory()
//      const user = useSelector((state) => state.user);

//     const [validated, setValidated] = useState(false);
  
//     const handleSubmit = (event) => {
//       const form = event.currentTarget;
//       if (form.checkValidity() === false) {
//         event.preventDefault();
//         event.stopPropagation();
//       }
  
//       setValidated(true);
//     };
  
//     return (<div>
//       <Form noValidate validated={validated} onSubmit={handleSubmit}>
//         <Row className="mb-3">
//           <Form.Group as={Col} md="4" controlId="validationCustom01">
//             <Form.Label>Nombre</Form.Label>
//             <Form.Control
//               required
//               type="text"
//               placeholder="First name"
//               defaultValue="Mark"
//             />
//             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//           </Form.Group>
//           <Form.Group as={Col} md="4" controlId="validationCustom02">
//             <Form.Label>Apellido</Form.Label>
//             <Form.Control
//               required
//               type="text"
//               placeholder="Last name"
//               defaultValue="Otto"
//             />
//             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//           </Form.Group>
//           <Form.Group as={Col} md="4" controlId="validationCustomUsername">
//             <Form.Label>Username</Form.Label>
//             <InputGroup hasValidation>
//               <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//               <Form.Control
//                 type="text"
//                 placeholder="Username"
//                 aria-describedby="inputGroupPrepend"
//                 required
//               />
//               <Form.Control.Feedback type="invalid">
//                Por favor elija su nombre de usuario.
//               </Form.Control.Feedback>
//             </InputGroup>
//           </Form.Group>
//         </Row>
//         <Row className="mb-3">
//           <Form.Group as={Col} md="6" controlId="validationCustom03">
//             <Form.Label>City</Form.Label>
//             <Form.Control type="text" placeholder="City" required />
//             <Form.Control.Feedback type="invalid">
//               Please provide a valid city.
//             </Form.Control.Feedback>
//           </Form.Group>
//           <Form.Group as={Col} md="3" controlId="validationCustom04">
//             <Form.Label>State</Form.Label>
//             <Form.Control type="text" placeholder="State" required />
//             <Form.Control.Feedback type="invalid">
//               Please provide a valid state.
//             </Form.Control.Feedback>
//           </Form.Group>
//           <Form.Group as={Col} md="3" controlId="validationCustom05">
//             <Form.Label>Zip</Form.Label>
//             <Form.Control type="text" placeholder="Zip" required />
//             <Form.Control.Feedback type="invalid">
//               Please provide a valid zip.
//             </Form.Control.Feedback>
//           </Form.Group>
//         </Row>
//         <Form.Group className="mb-3">
//           <Form.Check
//             required
//             label="Agree to terms and conditions"
//             feedback="You must agree before submitting."
//           />
//         </Form.Group>
//         <Button type="submit">Submit form</Button>
//       </Form>
//       </div>
//     );
//   }
  
// //   render(<FormExample />);