// //aca todavia hay que importar un monton de cosas para ir trabajando
// import React from "react";
// import { Route } from 'react-router-dom';


// import LandingPage from './components/landing/landing';
// import Home from './components/home/home';
// // import Detail from './components/detail/detail';
import SignUp from "./components/signUp/SignUp";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../src/contexts/AuthContext";

function App() {
  return (
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <div className="w-100" style={{maxWidth:'400px'}}>
        <SignUp />
        </div>
      </Container>
  )
}

export default App;
