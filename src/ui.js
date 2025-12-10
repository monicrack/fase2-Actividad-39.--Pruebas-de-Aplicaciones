// Función que limpia todos los mensajes de error
function limpiarErrores() {
  document.querySelectorAll(".error").forEach(error => error.textContent = "");
  document.getElementById("mensajeExito").textContent = "";
}

module.exports = { limpiarErrores };