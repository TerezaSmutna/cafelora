import { Order } from './components/Order/index.js';

import { Header } from '../../components/Header/index.js';
import { Footer } from '../../components/Footer/index.js';

export const OrderPage = () => {
const element = document.createElement('div');
element.classList.add('page');

element.append(
  Header({ showMenu: false }),
  Order({}),
  Footer(),
)


return element;
}
