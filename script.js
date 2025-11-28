document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.email-form');
  if (!form) return;

  const emailInput = form.querySelector('input[type="email"]');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    if (!email) {
      alert('Por favor, introduce un email.');
      return;
    }

    try {
      const response = await fetch('https://olivai-project-backend.onrender.com/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert('¡Gracias por suscribirte!');
        form.reset();
      } else {
        alert('Hubo un problema al suscribirte. Inténtalo de nuevo más tarde.');
      }
    } catch (error) {
      console.error('Error en la petición:', error);
      alert('Error de conexión. Inténtalo de nuevo más tarde.');
    }
  });
});
