import './style.css';
import { Layer } from '../Layer/index.js'

export const Drink = (props) => {
  const { id, name, ordered, image, layers } = props;

  let orderedClass = 'order-btn';
  if (ordered) {
    orderedClass = 'order-btn order-btn--ordered';
  }

  let orderedText = 'Objednat';
  if (ordered) {
    orderedText = 'Zrušit';
  }

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
    <button class="${orderedClass}">
      ${orderedText}
    </button>
  </div>
  `;


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
        console.log(data);
        element.replaceWith(Drink({
        id: id, 
        name: name,
        ordered: data.results.ordered,
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