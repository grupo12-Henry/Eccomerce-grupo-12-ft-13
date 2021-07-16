// import {createStore, applyMiddleware, compose} from 'redux';
// import rootReducer from '../reducer/index';
// import thunk from 'redux-thunk';

// const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

// export default store;

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/index';
import {composeWithDevTools}from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

export default store;