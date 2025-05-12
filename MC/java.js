// Función para generar un ID aleatorio tipo 'VIP-XXXXXX'
function generarID() {
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = 'VIP-';
  for (let i = 0; i < 6; i++) {
    id += letras.charAt(Math.floor(Math.random() * letras.length));
  }
  return id;
}

// Evento para todos los botones de "Comprar"
document.querySelectorAll('button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const nombreVIP = btn.parentElement.querySelector('h2').innerText;
    const fecha = new Date().toLocaleString();
    const id = generarID();

    alert(`🎟️ TICKET DE COMPRA\n\n✅ Rango: ${nombreVIP}\n🕒 Fecha: ${fecha}\n🆔 ID: ${id}\n\nGuarda este ticket como prueba.`);
  });
});
function generarID() {
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = 'VIP-';
  for (let i = 0; i < 6; i++) {
    id += letras.charAt(Math.floor(Math.random() * letras.length));
  }
  return id;
}

document.querySelectorAll('button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const nombreVIP = btn.parentElement.querySelector('h2').innerText;
    const fecha = new Date().toLocaleString();
    const id = generarID();

    // Mostrar los datos en el ticket
    document.getElementById('ticket-rango').innerText = nombreVIP;
    document.getElementById('ticket-fecha').innerText = fecha;
    document.getElementById('ticket-id').innerText = id;
    document.getElementById('ticket').style.display = 'block';

    // Scroll al ticket
    document.getElementById('ticket').scrollIntoView({ behavior: 'smooth' });
  });
});

// Evento para enviar el formulario de contacto
const form = document.querySelector('.contacto form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // evitar recargar la página

  // Puedes mostrar un alert o crear un mensajito en pantalla
  alert("📨 ¡Gracias por escribirnos! Te responderemos pronto.");

  // Limpiar los campos
  form.reset();
});
