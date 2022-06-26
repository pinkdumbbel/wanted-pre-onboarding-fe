import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './styles/globalStyles';

const registeredId = 'wanted123@wanted.com';
const registeredPasswd = 'Wanted123!';

localStorage.setItem('registeredId', registeredId);
localStorage.setItem('registeredPasswd', registeredPasswd);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
