import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import reducer from './reducers'
import logger from 'redux-logger'
const store = createStore(
  reducer,
  applyMiddleware(logger)
)

console.log("store", store.getState())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// serviceWorker.unregister();
