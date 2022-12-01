import '../Menu/style.css';
import { Drink } from './components/Drink/index.js'

export const Menu = (props) => {
  const { drinks = [] } = props;

  const element = document.createElement('section');
  element.classList.add('menu');
  element.innerHTML = `
  <a name="menu">
  <div class="container">
  <h2>Naše nabídka</h2>
  <p class="menu-intro">
    Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
  </p>
  <div class="drinks-list">

  <div class="order-detail">
    <a href="/objednavka">Detail objednávky</a>
  </div>
</div>
</a>
  `;


  if (drinks.length === 0) {
    fetch('https://apps.kodim.cz/daweb/cafelora/api/me/drinks', {
      method: 'GET',
      headers: {
        'Authorization': 'Email tereza@seznam.com',
      }
    })
      .then((response) => response.json())
      .then((data) => {
        element.replaceWith(Menu({
          drinks: data.results,
        }));
      });

  } else {
    const drinkList = element.querySelector('.drinks-list');
    drinkList.append(...drinks.map((drink) => Drink(drink)));
  }

  return element;
};
