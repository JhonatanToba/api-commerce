import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import store from './store';
import Footer from './layout/footer';
import BarNavigation from './layout/navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* Hacemos uso de REDUX para el cambio de variables de estado */
  <Provider store={store}>
    <div className='bg-dark text-white'>
      <BarNavigation />
      <App />
    </div>
      <Footer />
  </Provider>
);