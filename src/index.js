import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <BrowserRouter basename="/goit-react-hw-05-movies2"> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
