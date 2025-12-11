# fase2-Actividad-39.--Pruebas-de-Aplicaciones
pruebas unitarias, de funcionalidad, de integración y de rendimiento
 # Documento de pruebas del formulario de torneo (ut5)

## Alcance
-Este proyecto incluye un conjunto de validadores (validarNombre, validarEmail, validarComentario) y un conjunto de pruebas automatizadas con Jest para garantizar su correcto funcionamiento, rendimiento y robustez.

##Contenido de las pruebas:

A continuación se detallan todos los tests incluidos en el proyecto:

1. Tests unitarios de validación básica

Estos tests verifican que los validadores funcionan correctamente en los casos más comunes.

2. Test que verifica rechazo de comentarios largos

Este test comprueba que los comentarios que superen los 200 caracteres se rechacen correctamente.

3. Test de integración

Verifica que un conjunto completo de datos válidos (nombre, email y comentario) pase la validación correctamente.

4. Test de rendimiento

Se valida que la función validarNombre pueda ejecutarse 5000 veces en menos de 1 ms, comprobando así su eficiencia.

##Cómo ejecutar los tests

Asegúrate de tener Jest instalado y ejecuta:

npm test

Para instalar **Jest**, sigue estos pasos según tu entorno Node.js:


#Instalar Jest (método estándar)

1. Inicializa tu proyecto (si aún no lo hiciste):

```bash
npm init -y
```

2. Instala Jest como dependencia de desarrollo:

```bash
npm install --save-dev jest
```

3. Configura el script de test en `package.json`:

En tu `package.json`, cambia:

```json
"test": "echo \"Error: no test specified\" && exit 1"
```

por:

```json
"test": "jest"
```

# Ejecutar los tests

```bash
npm test
```



