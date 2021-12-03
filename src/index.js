import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Auth from './server/auth';
import FireData from './server/database';
import ImgStorage from './server/storage'
const auth = new Auth();
const fireData = new FireData();
const imgStorage = new ImgStorage();

ReactDOM.render(
  <React.StrictMode>
      <App auth={auth} fireData={fireData} imgStorage={imgStorage}/>
  </React.StrictMode>,
  document.getElementById('root')
);
