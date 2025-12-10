
/**
 * Valida un email usando expresión regular básica.
 * @param {string} email
 * @returns {boolean}
 */

function validarEmail(email) {
  const patronEmail = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
  return patronEmail.test(email);
}

// Valida un nombre: mínimo 3 letras y solo caracteres permitidos.
function validarNombre(nombre) {
  const patronNombre = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]{3,}$/;
  return patronNombre.test(nombre);
}

// Valida el comentario verificando longitud <= 200.
function validarComentario(comentario) {
  return comentario.length <= 200;
}

// module.exports = { validarNombre, validarEmail, validarComentario };