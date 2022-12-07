import './style.css';
import { HomePage } from './pages/HomePage/index.js';
import { Header } from './components/Header/index.js';
import { Footer } from './components/Footer/index.js';


const { pathname } = window.location;

if (pathname === '/') {
  document.querySelector('#app').append(Header());
  document.querySelector('#app').append(HomePage());
  document.querySelector('#app').append(Footer());
}



