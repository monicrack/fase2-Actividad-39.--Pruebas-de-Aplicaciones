const { validarNombre } = require("../src/validators");

test("validarNombre rápido (<5ms en 5000 ejecuciones)", () => {
  const inicio = performance.now();
  for (let i = 0; i < 5000; i++) {
    validarNombre("Alejandro");
  }
  const fin = performance.now();
  expect(fin - inicio).toBeLessThan(1);
});
