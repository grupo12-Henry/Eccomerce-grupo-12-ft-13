import React, { useState } from 'react';
import ReactDom from 'react-dom';
import SignUp from '../register/userRegister/signUp/SignUp';
import Login from '../register/userRegister/login/login';
import { useAuth } from '../../contexts/AuthContext';
<<<<<<< HEAD
import '../navModal/navModal';

=======
>>>>>>> 58c4f90a9e45caa53e268a861b8c97610886b860

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  width: '280px',
  height: '400px',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function NavModal({ open, children, onClose }) {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const { googleLogin } = useAuth()

  const { loginGoogle } = useAuth()


  if (!open) return null;

  const handleSignup = (e) => {
    e.preventDefault();
    setSignup(true);
  };

  const handleLogin1 = (e) => {
    e.preventDefault();
    setLogin(true);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setLogin(false);
    setSignup(false);
    onClose();
  }
<<<<<<< HEAD
  const handleBackClose = (e) => {
    e.preventDefault();
    setLogin(false);
    setSignup(false);
  }
  
  const handleGoogleLogin = (e) => {
    e.preventDefault()
    loginGoogle()
=======
  const handleBackClose = (e) =>{
    e.preventDefault();
    setLogin(false);
    setSignup(false);

  }
  const handleGoogle = (e) =>{
    e.preventDefault();
    googleLogin()
>>>>>>> 58c4f90a9e45caa53e268a861b8c97610886b860
  }

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES}>
        <div style={MODAL_STYLES}>
          <div>
            {children}
            {signup === true ? (<SignUp />) : null}
            {login === true ? (<Login />) : null}
          </div>

          <button onClick={handleClose}>X</button>
<<<<<<< HEAD
          {signup === true || login === true ? (<button onClick={handleBackClose}>Back</button>) :

            (
              <div>
                <button onClick={handleSignup}>
                  SignUp
                </button>
                <button onClick={handleLogin1}>
                  Login
                </button>
                <button onClick={handleGoogleLogin}>
                  Login with Google
                </button>
              </div>
            )
          }
=======
        { signup === true || login === true ? (<button onClick={handleBackClose}>Back</button>) :
          (
            <div>
              <button onClick={handleSignup}>
                SignUp
              </button>
              <button onClick={handleLogin1}>
                Login
              </button>
              <button onClick={handleGoogle}>
                Login with Google
              </button>
            </div>
          )
        }
>>>>>>> 58c4f90a9e45caa53e268a861b8c97610886b860
        </div>
      </div>
    </>,
    document.getElementById('portal')
  )
}
