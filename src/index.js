import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Auth from './server/auth';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import userData from './redux/userData';
const auth = new Auth();
const store = createStore(userData);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App auth={auth}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
