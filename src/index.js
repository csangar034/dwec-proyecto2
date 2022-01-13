import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BrowserRouter from 'react-router-dom/BrowserRouter'

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    "Hola mundo"
  </BrowserRouter>,
  document.getElementById('root')
);
