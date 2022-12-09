import { Banner } from './components/Banner/index.js';
import { Menu } from './components/Menu/index.js';
import { Gallery } from './components/Gallery/index.js';
import { Contact } from './components/Contact/index.js';

import { Header } from '../../components/Header/index.js';
import { Footer } from '../../components/Footer/index.js';


export const HomePage = () => {
  const element = document.createElement('div');
  element.classList.add('page');
  
  element.append(
    Header({ showMenu: true }),
    Banner({}),
    Menu({}),
    Gallery({}),
    Contact({}),
    Footer(),
  );


  return element;
};