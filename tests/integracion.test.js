//test comprueba que un conjunto de datos válidos
const { validarNombre, validarEmail, validarComentario } = require("../src/validators");

test("Validaciones múltiples correctas", () => {
  const nombre1 = "Ana";
  const nombre2 = "Luis";
  const email = "usuario@test.com";
  const comentario = "Partida interesante";

  const valido = validarNombre(nombre1) && validarNombre(nombre2) && validarEmail(email) && validarComentario(comentario);

  expect(valido).toBe(true);
});
