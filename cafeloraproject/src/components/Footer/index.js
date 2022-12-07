import '../Footer/style.css';

export const Footer = () => {

  const element = document.createElement('footer');
  element.classList.add('footer');
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
