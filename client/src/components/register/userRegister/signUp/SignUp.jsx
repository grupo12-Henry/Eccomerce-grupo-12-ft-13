import React, { useRef, useState } from "react";
// import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../../../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
<<<<<<< HEAD
import { StyledDiv } from "./styled";

=======
<<<<<<< HEAD
import '../signUp/signup.css'
=======
>>>>>>> 58c4f90a9e45caa53e268a861b8c97610886b860
>>>>>>> main

export default function Signup() {
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
      history.push("/");
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
                <h2>Registrate</h2>
                <p>{error}</p>
                <form onSubmit={handleSubmit}>
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
                  <button disabled={loading} className="btn btn-success" type="submit">
                    Sign Up
                  </button>
                </form>
              </div>
<<<<<<< HEAD
              <div className='registred'>
              Ya estás registrado? <Link to="/login">Logueate!</Link>
=======
              <div>
<<<<<<< HEAD
                Already have an account? Sign Up <Link to="/login">Log In</Link>
=======
                {/* Already have an account? Sign Up <Link to="/login">Log In</Link> */}
>>>>>>> 58c4f90a9e45caa53e268a861b8c97610886b860
>>>>>>> main
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </StyledDiv>
  );
}