  document.getElementById('toggle-darkmode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    
    this.textContent = document.body.classList.contains('dark-mode') 
      ? '☀️ Modo claro' 
      : '🌙 Modo oscuro';
  });

document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".btn_comprar");
    const contador = document.getElementById("contador-carrito");
    let cantidadCarrito = 0;
  
    botones.forEach(boton => {
      boton.addEventListener("click", () => {
        cantidadCarrito++;
        contador.textContent = cantidadCarrito;
  
        const mensaje = document.createElement("div");
        mensaje.textContent = "Producto añadido al carrito 🛒";
        mensaje.classList.add("popup-mensaje");
        document.body.appendChild(mensaje);
        setTimeout(() => {
          mensaje.remove();
        }, 2500);
      });
    });
  });
  

// Validación de formulario de reservaciones
document.getElementById('form_reserva').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const personas = document.getElementById('personas').value;

    if (!nombre || !correo || !fecha || !hora || !personas) {
        alert('Por favor, completa todos los campos');
    } else {
        alert('Reserva realizada con éxito');
    }
});

// Validación de formulario de contacto
document.getElementById('form_mensaje').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombreMensaje = document.getElementById('nombre_mensaje').value;
    const correoMensaje = document.getElementById('correo_mensaje').value;
    const mensaje = document.getElementById('mensaje').value;

    if (!nombreMensaje || !correoMensaje || !mensaje) {
        alert('Por favor, completa todos los campos');
    } else {
        alert('Mensaje enviado con éxito');
    }
});

  