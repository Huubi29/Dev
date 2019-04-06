const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navigation-elements');
  const body = document.querySelector('body');


  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    body.classList.toggle('mobile-scroll-lock');
  })
}

navSlide();