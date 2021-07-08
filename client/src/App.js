//aca todavia hay que importar un monton de cosas para ir trabajando
import React from 'react'
import { Route } from 'react-router'
// import LandingPage from './components/landing/landing';
import Home from './components/home/home';
import Detail from './components/detail/detail';
import SignUp from './components/sign-up/sign-up';
import {AuthProvider} from '../src/contexts/AuthContext';

function App() {
  return (
    <div className="App">
        <AuthProvider>
      <React.Fragment>
        {/* <Route exact path='/' component={LandingPage}/> */}
        <Route exact path='/' component={SignUp} />
        <Route exact path='/home' component={Home}/>
        <Route path='/detail/:id' component={Detail}/>

      </React.Fragment>
        </AuthProvider>
    </div>
  );
}

export default App;
