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
  applyMiddleware(logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

console.log("store", store.getState())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// serviceWorker.unregister();
