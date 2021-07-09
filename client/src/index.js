import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import store from './store/index';
import { Provider } from 'react-redux'
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

//aca todavia hay que importar store y pasarselo al provider como prop

ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
