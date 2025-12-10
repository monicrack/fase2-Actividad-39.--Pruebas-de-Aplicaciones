const { validarComentario } = require("../src/validators");

test("Comentario largo no permitido", () => {
  const largo = "x".repeat(300);
  expect(validarComentario(largo)).toBe(false);
});
