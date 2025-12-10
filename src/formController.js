const { validarNombre, validarEmail, validarComentario } = require("./validators");
const { limpiarErrores } = require("./ui");

function inicializarFormulario() {

  const formulario = document.getElementById("formPartida");

  const errNombreBlancas = document.getElementById("errNombreBlancas");
  const errNombreNegras = document.getElementById("errNombreNegras");
  const errColor = document.getElementById("errColor");
  const errResultado = document.getElementById("errResultado");
  const errEmail = document.getElementById("errEmail");
  const errFecha = document.getElementById("errFechaPartida");
  const errComentario = document.getElementById("errComentario");

  const inputNombreBlancas = document.getElementById("nombreBlancas");
  const inputNombreNegras = document.getElementById("nombreNegras");
  const inputColorBlancas = document.getElementById("colorBlancas");
  const inputColorNegras = document.getElementById("colorNegras");
  const selectResultado = document.getElementById("resultado");
  const inputEmail = document.getElementById("email");
  const inputFecha = document.getElementById("fechaPartida");
  const inputComentario = document.getElementById("comentario");

  // ------------------ VALIDACIÓN EN TIEMPO REAL ------------------

  inputNombreBlancas.addEventListener("input", () => {
    if (!validarNombre(inputNombreBlancas.value.trim())) {
      errNombreBlancas.textContent = "Nombre inválido (mínimo 3 letras)";
    } else {
      errNombreBlancas.textContent = "";
    }
  });

  inputNombreNegras.addEventListener("input", () => {
    const nombre = inputNombreNegras.value.trim();
    if (!validarNombre(nombre) || nombre === inputNombreBlancas.value.trim()) {
      errNombreNegras.textContent = "Nombre inválido o repetido";
    } else {
      errNombreNegras.textContent = "";
    }
  });

  inputColorBlancas.addEventListener("change", validarColor);
  inputColorNegras.addEventListener("change", validarColor);

  function validarColor() {
    if (!inputColorBlancas.checked && !inputColorNegras.checked) {
      errColor.textContent = "Debes seleccionar un color";
      return false;
    } else {
      errColor.textContent = "";
      return true;
    }
  }

  selectResultado.addEventListener("change", function() {
    if (selectResultado.value === "") {
      errResultado.textContent = "Debes seleccionar un resultado";
    } else {
      errResultado.textContent = "";
    }
  });

  inputEmail.addEventListener("input", () => {
    if (!validarEmail(inputEmail.value.trim())) {
      errEmail.textContent = "Formato de email incorrecto";
    } else {
      errEmail.textContent = "";
    }
  });

  inputFecha.addEventListener("change", () => validarFecha());

  function validarFecha() {
    const fechaInput = new Date(inputFecha.value);
    const hoy = new Date();

    if (isNaN(fechaInput)) {
      errFecha.textContent = "Debes seleccionar una fecha";
    } else if (fechaInput > hoy) {
      errFecha.textContent = "La fecha no puede ser posterior a hoy";
    } else {
      errFecha.textContent = "";
    }
  }

  inputComentario.addEventListener("input", () => {
    if (!validarComentario(inputComentario.value.trim())) {
      errComentario.textContent = "Máximo 200 caracteres";
    } else {
      errComentario.textContent = "";
    }
  });

  // ------------------ VALIDACIÓN FINAL ------------------

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    let valido = true;

    if (!validarNombre(inputNombreBlancas.value.trim())) {
      errNombreBlancas.textContent = "Nombre inválido";
      valido = false;
    }

    if (!validarNombre(inputNombreNegras.value.trim()) ||
      inputNombreNegras.value.trim() === inputNombreBlancas.value.trim()) {
      errNombreNegras.textContent = "Nombre inválido o repetido";
      valido = false;
    }

    if (!inputColorBlancas.checked && !inputColorNegras.checked) {
      errColor.textContent = "Debes seleccionar un color";
      valido = false;
    }

    if (selectResultado.value === "") {
      errResultado.textContent = "Debes seleccionar un resultado";
      valido = false;
    }

    if (!validarEmail(inputEmail.value.trim())) {
      errEmail.textContent = "Email inválido";
      valido = false;
    }

    validarFecha();
    if (errFecha.textContent !== "") valido = false;

    if (!validarComentario(inputComentario.value.trim())) {
      errComentario.textContent = "Máximo 200 caracteres";
      valido = false;
    }

    if (valido) {
      const datos = {
        nombreBlancas: inputNombreBlancas.value.trim(),
        nombreNegras: inputNombreNegras.value.trim(),
        colorBlancas: inputColorBlancas.value,
        colorNegras: inputColorNegras.value,
        email: inputEmail.value.trim(),
        fecha: inputFecha.value,
        comentario: inputComentario.value.trim()
      };

      localStorage.setItem("formulario", JSON.stringify(datos));

      const exito = document.getElementById("mensajeExito");
      exito.style.color = "green";
      exito.textContent = "Formulario enviado correctamente";

      formulario.reset();
    }
  });
}

module.exports = { inicializarFormulario };