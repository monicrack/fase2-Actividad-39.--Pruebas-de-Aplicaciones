describe('Formulario de partidas', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/index.html', { waitUntil: 'networkidle0' });
    // Esperar a que el JavaScript se cargue y se ejecute
    await page.waitForTimeout(1000);
  });

  beforeEach(async () => {
    // Limpiar el formulario antes de cada test
    await page.evaluate(() => {
      document.getElementById('formPartida').reset();
      // Limpiar todos los mensajes de error
      document.querySelectorAll('.error').forEach(el => el.textContent = '');
      document.getElementById('mensajeExito').textContent = '';
    });

    await page.waitForTimeout(300);
  });

  test('Muestra error si nombreBlancas es demasiado corto', async () => {
    // Escribir solo 2 caracteres (inválido)
    await page.click('#nombreBlancas');
    await page.type('#nombreBlancas', 'Al');

    // Esperar a que se procese el evento 'input'
    await page.waitForTimeout(500);

    // Verificar el mensaje de error
    const errorText = await page.$eval('#errNombreBlancas', el => el.textContent.trim());
    expect(errorText).toBe('Nombre inválido (mínimo 3 letras)');
  });

  test('No muestra error si nombreBlancas es válido', async () => {
    await page.click('#nombreBlancas');
    await page.type('#nombreBlancas', 'Magnus');

    await page.waitForTimeout(500);

    const errorText = await page.$eval('#errNombreBlancas', el => el.textContent.trim());
    expect(errorText).toBe('');
  });

  test('Muestra error si nombreNegras es repetido', async () => {
    // Rellenar nombreBlancas
    await page.type('#nombreBlancas', 'Magnus');

    // Rellenar nombreNegras con el mismo nombre
    await page.type('#nombreNegras', 'Magnus');

    await page.waitForTimeout(500);

    const errorText = await page.$eval('#errNombreNegras', el => el.textContent.trim());
    expect(errorText).toBe('Nombre inválido o repetido');
  });

  test('Muestra error si no se selecciona color', async () => {
    await page.type('#nombreBlancas', 'Ana');
    await page.type('#nombreNegras', 'Luis');
    // NO seleccionamos ningún color
    await page.select('#resultado', 'gananBlancas');
    await page.type('#email', 'usuario@test.com');
    await page.type('#fechaPartida', '2025-12-10');

    // Intentar enviar
    await page.click('button');

    await page.waitForTimeout(500);

    const errorText = await page.$eval('#errColor', el => el.textContent.trim());
    expect(errorText).toBe('Debes seleccionar un color');
  });

  test('Muestra error si email es inválido', async () => {
    await page.click('#email');
    await page.type('#email', 'emailinvalido');

    await page.waitForTimeout(500);

    const errorText = await page.$eval('#errEmail', el => el.textContent.trim());
    expect(errorText).toBe('Formato de email incorrecto');
  });

  test('Muestra error si comentario excede 200 caracteres', async () => {
    const textoLargo = 'a'.repeat(201);

    await page.click('#comentario');
    await page.type('#comentario', textoLargo);

    await page.waitForTimeout(500);

    const errorText = await page.$eval('#errComentario', el => el.textContent.trim());
    expect(errorText).toBe('Máximo 200 caracteres');
  });

  test('Formulario se envía correctamente con datos válidos', async () => {
    // Rellenar todos los campos correctamente
    await page.type('#nombreBlancas', 'Magnus Carlsen');
    await page.type('#nombreNegras', 'Anish Giri');
    await page.click('#colorBlancas');
    await page.select('#resultado', 'gananBlancas');
    await page.type('#email', 'usuario@test.com');
    await page.type('#fechaPartida', '2025-12-10');
    await page.type('#comentario', 'Partida interesante');

    // Enviar formulario
    await page.click('button');

    // Esperar el mensaje de éxito
    await page.waitForTimeout(1000);

    const exitoText = await page.$eval('#mensajeExito', el => el.textContent.trim());
    expect(exitoText).toBe('Formulario enviado correctamente');

    // Verificar que el color es verde
    const color = await page.$eval('#mensajeExito', el => el.style.color);
    expect(color).toBe('green');
  });

  test('Formulario se resetea después de envío exitoso', async () => {
    // Rellenar y enviar
    await page.type('#nombreBlancas', 'Ana');
    await page.type('#nombreNegras', 'Luis');
    await page.click('#colorBlancas');
    await page.select('#resultado', 'tablas');
    await page.type('#email', 'test@mail.com');
    await page.type('#fechaPartida', '2025-12-01');

    await page.click('button');
    await page.waitForTimeout(1000);

    // Verificar que los campos se limpiaron
    const nombreBlancas = await page.$eval('#nombreBlancas', el => el.value);
    expect(nombreBlancas).toBe('');
  });
});