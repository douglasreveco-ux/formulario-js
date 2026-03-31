const form = document.getElementById("formulario");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // evita envío real

  let valido = true;

  // Obtener valores
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  // Limpiar errores
  document.getElementById("errorNombre").textContent = "";
  document.getElementById("errorCorreo").textContent = "";
  document.getElementById("errorMensaje").textContent = "";

  // VALIDACIONES
  if (nombre === "") {
    document.getElementById("errorNombre").textContent = "El nombre es obligatorio";
    valido = false;
  }

  // Validación correo con RegExp
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regexCorreo.test(correo)) {
    document.getElementById("errorCorreo").textContent = "Correo inválido";
    valido = false;
  }

  if (mensaje === "") {
    document.getElementById("errorMensaje").textContent = "El mensaje es obligatorio";
    valido = false;
  }

  // Si no es válido, no continúa
  if (!valido) return;

  // Simulación envío con promesa
  enviarFormulario(nombre, correo, mensaje)
    .then(res => {
      document.getElementById("estado").textContent = "✅ Enviado correctamente";
    })
    .catch(err => {
      document.getElementById("estado").textContent = "❌ Error al enviar: " + err;
    });

});

// FUNCIÓN CON PROMESA
function enviarFormulario(nombre, correo, mensaje) {
  return new Promise((resolve, reject) => {
    document.getElementById("estado").textContent = "Enviando...";

    setTimeout(() => {
      // Simulación de error aleatorio
      const error = Math.random() < 0.3;

      if (error) {
        reject("Fallo del servidor");
      } else {
        resolve("OK");
      }
    }, 2000);
  });
}