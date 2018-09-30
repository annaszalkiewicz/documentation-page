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

// Hide navigation bar when clicking on link

const links = document.getElementsByClassName('nav-link');

const hideNav = () => {
  if (window.innerWidth < 1280) {
    navbar.classList.remove('show');
  }
}

for (const link of links) {
  link.addEventListener('click', hideNav);
}

// Always show navigation bar on desktops

const showNav = () => {
  if (window.innerWidth >= 1280) {
    navbar.classList.add('show');
  }
}

document.addEventListener('DOMContentLoaded', showNav);