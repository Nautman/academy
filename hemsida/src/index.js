import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//importera provider som ger vår app access till vår store
import { Provider } from 'react-redux'

//importera store och reducer
import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

//skapa en store med en reducer som vi skapat själva (rootReducer)
//const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
