import './style.css';
import { OrderItem } from '../OrderItem/index.js'

export const Order = (props) => {
  const { items = [] } = props;

  let orderedValue = 'empty-order';

  const element = document.createElement('main');
  element.classList.add('order');
  element.innerHTML = `
      <div class="order__content container">
        <h1>Vaše objedávnka</h1>
        <p class="${orderedValue}">Zatím nemáte nic objednáno</p>
        <div class="order__items">
        </div>
      </div>
  `;

  
    fetch('https://apps.kodim.cz/daweb/cafelora/api/me/drinks', {
      method: 'GET',
      headers: {
        'Authorization': 'Email tereza@seznam.com',
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results[0].ordered);
        const dataOrdered = element.querySelector('.order__items');
        dataOrdered.append(...data.results.filter((item) => (item.ordered === true))
          .map((item) => OrderItem(item)));
        
        if (data.results.some((result) => result.ordered === true)) {
          orderedValue = 'empty-order empty-order--hide';
        }
      });

  return element;
};

