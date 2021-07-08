// aca todavia hay que importar un monton de cosas para ir trabajando
import React from 'react';
import { Route } from 'react-router';
import LandingPage from './components/landing/landing';
import SignUp from './components/sign-up/sign-up';
// import {Container} from 'react-bootstrap';
import {AuthProvider} from '../src/contexts/AuthContext';

function App() {
  return (
    <div className="App">
      {/* // TODO: Esto hice yo */}
      <AuthProvider>
          {/* <Container className="d-flex align-items-center justify-content-center" style={{minHeight: '100vh'}}> */}
            {/* <div className="w-100" style={{maxWidth: '400px'}}> */}
              <Route exact path='/' component={SignUp} />
            {/* </div> */}
          {/* <Route exact path='/' component={LandingPage}/> */}
          {/* </Container> */}
      </AuthProvider>
    </div>
  );
}

export default App;
