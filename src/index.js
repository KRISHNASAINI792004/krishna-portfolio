import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ React 18 API
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); // ✅ createRoot instead of ReactDOM.render

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


