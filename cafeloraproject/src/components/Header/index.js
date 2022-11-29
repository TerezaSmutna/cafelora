import '../Header/style.css';

export const Header = (props) => {
  const { } = props;

  const element = document.createElement('header');
  element.classList.add('header');
  element.innerHTML = `
  <div class="header__content container">
  <div class="site-logo"></div>

  <div class="navigation">
    <button class="nav-btn"></button>
    <nav class="rollout-nav nav-closed">
      <a href="#home">domů</a>
      <a href="#menu">menu</a>
      <a href="#gallery">galerie</a>
      <a href="#contact">kontakt</a>
    </nav>
  </div>
</div>
  `;
  

  element.querySelector('button').addEventListener('click', () => {
    let choice = element.querySelector('.rollout-nav');
    choice.classList.toggle('nav-closed');
  });


  let sections = element.querySelector('.rollout-nav').querySelectorAll('a');
  sections.forEach(section => {
    let choice = element.querySelector('.rollout-nav');
    section.addEventListener('click', () => {
      choice.classList.toggle('nav-closed');
    });
  });


  return element;
};