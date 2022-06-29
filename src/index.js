import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { makeServer } from './server';

import { ProductFilterProvider } from './context/product-filter-context';
import { ProductProvider } from './context/product-context';
import { UserProvider } from './context/user-context';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ProductProvider>
        <ProductFilterProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ProductFilterProvider>
      </ProductProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
