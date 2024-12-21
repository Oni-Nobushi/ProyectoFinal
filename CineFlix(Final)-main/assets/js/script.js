// script.js

// Mensaje de prueba para verificar conexión
console.log("¡El archivo script.js está conectado correctamente!");

// Ejemplo de manipulación básica del DOM
document.addEventListener("DOMContentLoaded", () => {
  console.log("¡El DOM está completamente cargado!");
});

// Función para verificar si todos los campos del formulario están completos
function verificarCamposFormulario() {
  const nombre = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const asunto = document.getElementById('subject').value;
  const mensaje = document.getElementById('message').value;

  if (nombre === '' || email === '' || asunto === '' || mensaje === '') {
    console.log('Por favor, completa todos los campos del formulario.');
  } else {
    console.log('¡Formulario completo!');
  }
}

// Seleccionar el formulario y agregar el evento de "submit"
const formulario = document.querySelector('form');
formulario.addEventListener('submit', function(evento) {
  evento.preventDefault(); // Evita que se envíe el formulario hasta hacer la verificación
  verificarCamposFormulario();
});

// Seleccionar el botón y la navbar
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

// Agregar funcionalidad para mostrar/ocultar el menú
navbarToggler.addEventListener('click', () => {
  navbarCollapse.classList.toggle('active');
});
