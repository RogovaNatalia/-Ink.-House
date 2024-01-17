const openMenuBtn = document.getElementById('openMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const nav = document.querySelector('.nav-toggle');

openMenuBtn.addEventListener('click', function () {
  nav.classList.add('nav-toggle--open');
});

closeMenuBtn.addEventListener('click', function () {
  nav.classList.remove('nav-toggle--open');
});
