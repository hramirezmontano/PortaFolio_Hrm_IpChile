document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', (event) => {
      // 1. Limpieza de datos (quitar espacios en blanco al inicio y final)
      const nombre = form.querySelector('[name="nombre"]');
      const email = form.querySelector('[name="email"]');
      const asunto = form.querySelector('[name="asunto"]');
      const mensaje = form.querySelector('[name="mensaje"]');

      // 2. Validaciones personalizadas campo por campo
      let esValido = true;

      // Validar que el nombre no contenga solo espacios
      if (nombre.value.trim() === '') {
        nombre.setCustomValidity('El nombre no puede estar vacío.');
        esValido = false;
      } else {
        nombre.setCustomValidity(''); // Restablece el estado
      }

      // Validar que el asunto no contenga solo espacios
      if (asunto.value.trim() === '') {
        asunto.setCustomValidity('El Asunto no puede estar vacío.');
        esValido = false;
      } else {
        asunto.setCustomValidity(''); // Restablece el estado
      }
      
      // Validar que el mensaje no contenga solo espacios
      if (mensaje.value.trim() === '') {
        mensaje.setCustomValidity('El Mensaje no puede estar vacío.');
        esValido = false;
      } else {
        mensaje.setCustomValidity(''); // Restablece el estado
      }

      // Validar formato de Email mediante Expresión Regular
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regexEmail.test(email.value.trim())) {
        email.setCustomValidity('Ingresa un correo electrónico válido.');
        esValido = false;
      } else {
        email.setCustomValidity('');
      }

      // 3. Detener envío si alguna validación falló
      if (!esValido || !form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      // Muestra los estilos visuales de validación de Bootstrap
      form.classList.add('was-validated');
    });
  }
});