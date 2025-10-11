import { init } from './render.js';

document.addEventListener('DOMContentLoaded', () => {
  init();

  const menuBtn = document.getElementById('menuBtn');
  const navList = document.querySelector('nav ul');
  menuBtn.addEventListener('click', () => navList.classList.toggle('show'));

  const current = location.pathname.split('/').pop();
  document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === current) link.classList.add('active');
  });
});
