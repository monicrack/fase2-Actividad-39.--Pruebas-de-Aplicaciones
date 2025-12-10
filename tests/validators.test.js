
const { validarNombre, validarEmail, validarComentario } = require("../src/validators");

test("Nombre válido", () => {
  expect(validarNombre("Carlos")).toBe(true);
});

test("Nombre demasiado corto", () => {
  expect(validarNombre("Al")).toBe(false);
});

test("Email válido", () => {
  expect(validarEmail("test@example.com")).toBe(true);
});

test("Email inválido", () => {
  expect(validarEmail("correo@.com")).toBe(false);
});

test("Comentario válido <= 200", () => {
  expect(validarComentario("a".repeat(200))).toBe(true);
});

test("Comentario inválido > 200", () => {
  expect(validarComentario("a".repeat(201))).toBe(false);
});
