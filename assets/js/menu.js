const menuBtn = document.getElementById('menu-btn');
const menuClose = document.getElementById('menuClose');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');

// Abrir menú
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  menuOverlay.classList.add('active');
});

// Cerrar menú
menuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  menuOverlay.classList.remove('active');
});

// Cerrar menú al hacer clic en el overlay
menuOverlay.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  menuOverlay.classList.remove('active');
});
