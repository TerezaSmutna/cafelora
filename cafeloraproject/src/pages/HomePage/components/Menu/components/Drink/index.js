import './style.css';
import { Layer } from '../Layer/index.js'

export const Drink = (props) => {
  const { id, name, ordered, image, layers } = props;

  const element = document.createElement('div');
  element.classList.add('drink');
  element.innerHTML = `
  <div class="drink__product">
    <div class="drink__cup">
      <img src="${image}">
    </div>
    <div class="drink__info">
      <h3>${name}</h3>
    </div>
  </div>
  <div class="drink__controls">
    <button class="order-btn">
      Objednat
    </button>
  </div>
  `;

  if (ordered) {
    element.querySelector('button').textContent = 'Zrušit';
    element.querySelector('button').classList.add('order-btn--ordered');
  } else {
    element.querySelector('button').textContent = 'Objednat';
  }

  element.querySelector('button').addEventListener('click', () => {

    fetch(`https://apps.kodim.cz/daweb/cafelora/api/me/drinks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Email tereza@seznam.com',
      },
      body: JSON.stringify({ ordered: !ordered }),
    })
      .then((response) => response.json())
      .then((data) => {
        element.replaceWith(Drink({
        id: id, 
        name: name,
        ordered: ordered,
        image: image,
        layers: layers,
      }));
      });
      //window.location.href = '/objednavka';
  });

  const drinkInfo = element.querySelector('.drink__info');
  drinkInfo.append(...layers.map((item) => Layer(item)));


  return element;
};