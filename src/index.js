import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.js';

import './index.css'
import { ContextProvider } from './contexts/ContextProvide.js';

 
ReactDOM.render(
  <ContextProvider>
    <App/>
  </ContextProvider>,
  document.getElementById('root'))
