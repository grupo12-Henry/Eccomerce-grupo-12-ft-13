import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../../../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Loading from "../../../../components/loading/Loading";
import Nav from '../../../navbar/navbar'
import Footer from '../../../footer/footer'


export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/home");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 600);
  }, []);

  if (!loading) {
    return <Loading />;
  } else {
    return (
      <>
      <Nav/>
      <header className="navbar" style={{display: 'flex', justifyContent: 'center'}}>
        <nav>
              <div>
                <h2>Cambia tu contraseña</h2>
                <p>{error}</p>
                <form onSubmit={handleSubmit} className='d-flex-column justify-content-center'>
                  <label>Correo Electronico</label><br/>
                  <input
                    type="text"
                    name="email"
                    ref={emailRef}
                    required
                    defaultValue={currentUser.email}
                  ></input><br/>
                  <label  className='mt-3'>Contraseña</label><br/>
                  <input
                  
                    type="password"
                    name="email"
                    ref={passwordRef}
                  ></input><br/>
                  <label  className='mt-3'>Confirma tu contraseña</label><br/>
                  <input
                  
                    type="password"
                    name="email"
                    ref={passwordConfirmRef}
                    ></input><br/>
                  <button className="SignUp btn btn-success mt-3" type="submit">
                    Actualizar
                  </button>
                </form>
              </div>
              <div>
                <Link className='btn btn-dark mt-3'to="/home">Cancel</Link>
              </div>
            
        </nav>
      </header>
      <Footer/>
      </>
    );
  }
}
