import React from 'react';
import ReactDOM from 'react-dom/client'; // This is correct for React 18

import App from './App';
import './index.css';
import { ContextProvider } from './contexts/ContextProvide';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root

root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
