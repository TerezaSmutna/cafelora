import { Banner } from './components/Banner/index.js';
import { Menu } from './components/Menu/index.js';
import { Gallery } from './components/Gallery/index.js';
import { Contact } from './components/Contact/index.js';


export const HomePage = () => {

  const element = document.createElement('div');
  element.classList.add('page');
  element.innerHTML = `
  `;
  
  element.append(
    Banner({}),
    Menu({}),
    Gallery({}),
    Contact({}),
  );

  return element;
};