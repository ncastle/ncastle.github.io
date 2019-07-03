const toggleNav = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('nav li');

  burger.addEventListener('click', () => {
    console.log('burger clicked');
    nav.classList.toggle('nav-open');
  })
}

// start the function
toggleNav();