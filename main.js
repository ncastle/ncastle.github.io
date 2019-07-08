const toggleNav = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('nav li');

  burger.addEventListener('click', () => {
    console.log('burger clicked');
    nav.classList.toggle('nav-open');
  });
}

// do this later
// const makeButton = () => {
//   const nextButton = document.getElementById('next-button');
//   nextButton.addEventListener('click', () => {
//     console.log('next button clicked!');
//     console.log({nextButton});
//     nextButton.attributes.onClick = 'window.location.href="#about-top"';
//   });
// }

// start the function
toggleNav();
// makeButton();