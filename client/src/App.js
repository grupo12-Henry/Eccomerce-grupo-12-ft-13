//aca todavia hay que importar un monton de cosas para ir trabajando
import React from 'react'
import { Route } from 'react-router'
import LandingPage from './components/landing/landing';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/home' component={Home}/>
      </React.Fragment>
    </div>
  );
}

export default App;
