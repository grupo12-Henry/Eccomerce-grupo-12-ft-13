import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ReactDom from "react-dom";
import SignUp from "../register/userRegister/signUp/SignUp";
import Login from "../register/userRegister/login/login";
import { useAuth } from "../../contexts/AuthContext";
import StyledDiv from "./styled";
import CloseIcon from "@material-ui/icons/Close";
import logo from "../../assets/images/logo-google.png";
import { crearUsuario, getUser } from "../../actions";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#333333",
  padding: "0.5rem 3rem 3rem 3rem",
  boxShadow: '0px 0px 5px 3px #ebc28e',
  borderRadius:'0.2rem',
  zIndex: 1000,
  color: '#fff',
  textAlign: 'center', 
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column'
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  borderRadius: '0.5rem',
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export default function NavModal({ open, children, onClose }) {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  let { currentUser, logout } = useAuth();
  const { googleLogin } = useAuth();
  const dispatch = useDispatch()
  if (!open) return null;

  async function vamo (){
    if(currentUser){try{
      dispatch( !window.localStorage.getItem('user')&&crearUsuario({mail:currentUser.email, name: `${currentUser.displayName}`, token:currentUser.refreshToken}))
    }catch(err){console.log(err)}}
  }
  vamo()

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
  };
  const handleBackClose = (e) => {
    e.preventDefault();
    setLogin(false);
    setSignup(false);
  };
  const handleGoogle = (e) => {
    e.preventDefault();
    googleLogin();
  };

  async function handleLogout() {
    try {
      await logout();
      setLogin(false);
      setSignup(false);
      onClose()
    } catch {
      console.log("no se pudo")
    }
  }

  return ReactDom.createPortal(
    <StyledDiv>
      {currentUser ? (
        <div style={OVERLAY_STYLES}>
          <div style={MODAL_STYLES}>
              <div className='d-flex justify-content-end'>                
                  <CloseIcon className='bClose' onClick={handleClose} style={{height: '2.2rem', width:'3rem', color:'red',borderRadius:'2px'}}/>
              </div>
            
              <div>
                 <p style={{marginTop:'1rem'}}>¡Ahora estas logueado!</p>
              </div>
            <button
              class="btn btn-light bLogout"
              // className='bLogout'
              // margin-right="1rem"
              // width="3rem"
              onClick={handleLogout}
            >
              Desloguearse
            </button>
          </div>
        </div>
      ) : (
        <div style={OVERLAY_STYLES}>
          <div style={MODAL_STYLES}>
            <div>
              {children}
              {signup === true ? <SignUp onClose={() => onClose()} /> : null}
              {login === true ? <Login onClose={() => onClose()} /> : null}
            </div>
            
            {signup === true || login === true ? (
              <div>
              <button className="btn btn-light"   onClick={handleBackClose}>
                Volver
              </button>
              </div>
            ) : (
              <>
              <div className='d-flex justify-content-end' style={{width: '120%'}}>                
              <CloseIcon className='icon' onClick={handleClose} style={{height: '1.2rem'}}/>
              </div>
              <div
                class="btn-group-vertical"
                role="group"
                aria-label="Basic outlined example"
              >
                <button class="btn btn-light mb-3 mt-3" onClick={handleSignup}>
                  Registrate
                </button>
                <button class="btn btn-light mb-3" onClick={handleLogin1}>
                  Logueate con tu mail
                </button>
                <button class="btn btn-light" onClick={handleGoogle}>
                  Logueate con <img className="logo-google" src={logo} />
                </button>
              </div>
              </>
                          )}
          </div>

        </div>
      )}
    </StyledDiv>,
    document.getElementById("portal")
  );
}
