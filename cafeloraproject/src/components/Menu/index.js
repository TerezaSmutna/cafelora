import '../Menu/style.css';
import { Drink } from './components/Drink/index.js'

export const Menu = (props) => {
  const { } = props;

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


  const drinkList = element.querySelector('.drinks-list');
  drinkList.append(
    Drink({
      id: 'romano',
      name: 'Romano',
      ordered: false,
      image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/romano.png',
      layers: [
        {
          color: '#fbdf5b',
          label: 'citrón',
        },
        {
          color: '#613916',
          label: 'espresso',
        },
      ]
    }),
  );

  return element;
};
