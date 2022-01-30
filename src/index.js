import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//This step makes sure that the app is rendered to the DOM(index html file)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
