// Show / hide navigation bar on hamburger menu click

const icon = document.getElementById('icon');
const navbar = document.getElementById('navbar');

const toggleMenu = () => {
  if (navbar.classList.contains('show')) {
    navbar.classList.remove('show');
  }
  else {
    navbar.classList.add('show');
  }
}

icon.addEventListener('click', toggleMenu);