import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // disable 2 times calls
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);
