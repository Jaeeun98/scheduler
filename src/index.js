import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Auth from './server/auth';

const auth = new Auth();

ReactDOM.render(
  <React.StrictMode>
    <App auth={auth}/>
  </React.StrictMode>,
  document.getElementById('root')
);
