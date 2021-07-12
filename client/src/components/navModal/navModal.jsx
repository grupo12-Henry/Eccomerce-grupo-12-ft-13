import React, { useState } from 'react';
import ReactDom from 'react-dom';
import SignUp from '../register/userRegister/signUp/SignUp';
import Login from '../register/userRegister/login/login';
import { useAuth } from '../../contexts/AuthContext';
import StyledDiv from "./styled";
import CloseIcon from "@material-ui/icons/Close";
import logo from "../../assets/images/logo-google.png";


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
  const handleBackClose = (e) =>{
    e.preventDefault();
    setLogin(false);
    setSignup(false);

  }
  const handleGoogle = (e) =>{
    e.preventDefault();
    googleLogin()
  }

  return ReactDom.createPortal(
    <StyledDiv>
        <div style={OVERLAY_STYLES}>
        <div style={MODAL_STYLES}>
          <div>
            {children}
            {signup === true ? (<SignUp />) : null}
            {login === true ? (<Login />) : null}
          </div>

          <button onClick={handleClose}>X</button>
        { signup === true || login === true ? (<button onClick={handleBackClose}>Back</button>) :
          (
            <div class="btn-group-vertical" role="group" aria-label="Basic outlined example">
              <button class="btn btn-primary" onClick={handleSignup}>
                Registrate
              </button>
              <button class="btn btn-primary" onClick={handleLogin1}>
                Logueate con tu mail
              </button>
              <button  class="btn btn-primary" onClick={handleGoogle}>
              Logueate con <img className='logo-google'src={logo}/>
              </button>
              </div>
          )
        }
        </div>
      </div>
    </StyledDiv>,
    document.getElementById('portal')
  )
}

