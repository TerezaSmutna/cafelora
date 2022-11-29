import '../Banner/style.css';

export const Banner = (props) => {
  const { } = props;

  const element = document.createElement('section');
  element.classList.add('banner');
  element.innerHTML = `
  <a name="home">
    <div class="container">
      <div class="banner__content">
        <h1>Přijď to ochutnat!</h1>
        <p>Nabízíme kvalitní kávu, útulné prostředí a perfektní servis.</p>
      </div>
    </div>
  </a>
  `;
  
  return element;
};
