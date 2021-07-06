//aca todavia hay que importar un monton de cosas para ir trabajando
import React from 'react'
import { Route } from 'react-router'
import LandingPage from './components/landing/landing';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Route exact path='/' component={LandingPage}/>
      </React.Fragment>
    </div>
  );
}

export default App;
