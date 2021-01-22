import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap'
import 'bootstrap/scss/bootstrap.scss'
import App from './App';
import { Provider } from 'react-redux'
import store from 'store'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);


reportWebVitals();