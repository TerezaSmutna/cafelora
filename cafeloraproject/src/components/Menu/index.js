import '../Menu/style.css';
import { Layer } from './components/Layer/index.js';

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
    <div class="drink">
      <div class="drink__product">
        <div class="drink__cup">
          <img src="https://apps.kodim.cz/daweb/cafelora/assets/cups/espresso.png">
        </div>
        <div class="drink__info">
          <h3>Espresso</h3>
        </div>
      </div>
      <div class="drink__controls">
        <button class="order-btn">
          Objednat
        </button>
      </div>
    </div>


  <div class="order-detail">
    <a href="/objednavka">Detail objednávky</a>
  </div>
</div>
</a>
  `;


  const drinkInfo = element.querySelector('.drink__info');
  drinkInfo.append(
    Layer({ color: '#feeeca', label: 'mléčná pěna' }),
  );

  return element;
};
