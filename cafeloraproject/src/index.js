import './style.css';
import { HomePage } from './pages/HomePage/index.js';
import { OrderPage } from './pages/OrderPage/index.js';

const { pathname } = window.location;


if (pathname === '/') {
  document.querySelector('#app').append(HomePage());
}

if (pathname === '/objednavka') {
  document.querySelector('#app').append(OrderPage());
}



