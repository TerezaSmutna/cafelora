import './style.css';
import { OrderItem } from '../OrderItem/index.js'

export const Order = (props) => {
  const { items = [] } = props;


  const element = document.createElement('main');
  element.classList.add('order');
  element.innerHTML = `
      <div class="order__content container">
        <h1>Vaše objedávnka</h1>
        <p class="empty-order">Zatím nemáte nic objednáno</p>
        <div class="order__items">
        </div>
      </div>
  `;


  if (items.length === 0) {
  fetch('https://apps.kodim.cz/daweb/cafelora/api/me/drinks', {
    method: 'GET',
    headers: {
      'Authorization': 'Email tereza@seznam.com',
    }
  })
    .then((response) => response.json())
    .then((data) => {

      element.replaceWith(Order({
        items: data.results,
      }));
    })

    } else {
      const dataOrdered = element.querySelector('.order__items');
      dataOrdered.append(...items.filter((item) => (item.ordered === true))
        .map((item) => OrderItem(item)));
    }

      if (items.some((result) => result.ordered === true)) {
        element.querySelector('.empty-order').classList.add = 'empty-order--hide';
        element.querySelector('.empty-order').textContent = '';
      } 

      console.log(items);

  return element;
};

