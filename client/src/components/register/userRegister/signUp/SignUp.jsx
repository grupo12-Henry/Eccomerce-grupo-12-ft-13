import React, { useRef, useState } from "react";
// import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../../../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { StyledDiv } from "./styled";
import '../signUp/signup.css'


export default function Signup({ onClose }) {
  const nombreRef = useRef();
  const apellidoRef = useRef();
  const nacimientoRef = useRef();
  const direccionRef = useRef();
  const provinciaRef = useRef();
  const localidadRef = useRef();
  const codigoPostalRef = useRef();
  const telefonoRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      // onClose()
      history.push("/home");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <StyledDiv>
      {/* <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}> */}
      <header className="navbar">
        <nav>
          <ul className="list">
            <li className="list-item">
              <div>
                
                <p>{error}</p>
                <form onSubmit={handleSubmit}>
                <div className='email'>
                  <label>Nombre:</label>
                  <input className='input_email' type="text" name="nombre" ref={nombreRef}></input>
                  </div>
                  <div className='email'>
                  <label>Apellido:</label>
                  <input className='input_email' type="text" name="apellido" ref={apellidoRef}></input>
                  </div>
                  <div className='email'>
                  <label>Fecha de Nacimiento:</label>
                  <input className='input_email' type="date" name="nacimiento" ref={nacimientoRef}></input>
                  </div>
                  <div className='email'>
                  <label>Telefono:</label>
                  <input className='input_email' type="number" name="telefono" ref={telefonoRef}></input>
                  </div>
                  <div className='email'>
                  <label>Direccion:</label>
                  <input className='input_email' type="text" name="direccion" ref={direccionRef}></input>
                  </div>
                  <div className='email'>
                  <label>Provincia:</label>
                  <input className='input_email' type="text" name="provincia" ref={provinciaRef}></input>
                  </div>
                  <div className='email'>
                  <label>Localidad:</label>
                  <input className='input_email' type="text" name="localidad" ref={localidadRef}></input>
                  </div>
                  <div className='email'>
                  <label>Codigo Postal:</label>
                  <input className='input_email' type="number" name="codigoPostal" ref={codigoPostalRef}></input>
                  </div>                  
                  <div className='email'>
                  <label>Correo Electronico:</label>
                  <input className='input_email' type="text" name="email" ref={emailRef}></input>
                  </div>
                  <br/>
                  <div className='password'>
                  <label>Crea tu contraseña:</label>
                  <input  className='input_password'type="password" name="email" ref={passwordRef}></input>
                  </div>
                  <br/>
                  <div className='password_confirmation'>
                  <label>Confirma contraseña:</label>
                  <input
                    className='input_passwordconfirmation'
                    type="password"
                    name="email"
                    ref={passwordConfirmRef}
                  ></input>
                  </div>
                  <br/>
                  <button disabled={loading} className="btn btn-light" type="submit">
                    Registrate
                  </button>
                </form>
              </div>
              <div className='registred'>
              Ya estás registrado? <Link to="/login" style={{color: '#ebc28e'}}>Logueate!</Link>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </StyledDiv>
  );
}