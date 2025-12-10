# fase2-Actividad-39.--Pruebas-de-Aplicaciones
pruebas unitarias, de funcionalidad, de integración y de rendimiento
 # Documento de pruebas del formulario de torneo (ut5)

## Alcance
- Validación de campos, feedback de errores, envío, almacenamiento en localStorage y rendimiento de interacciones básicas.

## Entorno
- WebStorm + Jest (JSDOM), @testing-library/dom, @testing-library/jest-dom.
- Coverage habilitado.

## Pruebas unitarias
- Funciones: validarNombre, validarEmailStr, validarComentarioStr, validarFechaNoFutura.
- Casos:
  - Nombre: <3 letras (rechazo), acentos y espacios (acepta).
  - Email: sin @ (rechazo), formato básico (acepta).
  - Comentario: 201 chars (rechazo), vacío (acepta).
  - Fecha: vacía (rechazo), futura (rechazo), hoy (acepta).
- Resultado: 100% passed. Coverage: XX% líneas.

## Pruebas de funcionalidad (DOM)
- Flujo: submit sin datos => errores y mensaje rojo.
- Flujo: datos válidos => mensaje verde y limpieza de formulario.
- Resultado: 100% passed.

## Pruebas de integración (DOM + localStorage)
- Guardado: crea `partidas` y agrega objetos con campos correctos.
- Acumulación: dos envíos => longitud 2.
- Resultado: 100% passed.

## Pruebas de rendimiento
- Input validación: < 2 ms (JSDOM).
- Submit + localStorage: < 5 ms (JSDOM).
- Resultado: OK dentro de presupuesto.

## Observaciones y mejoras
- Separación de validadores mejoró testabilidad y cobertura.
- Considerar mensajes accesibles (aria-live) para feedback y pruebas de accesibilidad futuras.

