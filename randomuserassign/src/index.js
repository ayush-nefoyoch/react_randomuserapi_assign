import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { UserContextProvider } from './context/UserDetailsProvider';

ReactDOM.render(
  <>
  <UserContextProvider>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </UserContextProvider>
  </>,
  document.getElementById('root')
);