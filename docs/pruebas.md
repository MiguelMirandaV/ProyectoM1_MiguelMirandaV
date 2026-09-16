# Registro de pruebas

Solo se registran como aprobadas comprobaciones ejecutadas. Las pruebas de la aplicación se añadirán a medida que se implemente.

| Etapa | Comprobación | Resultado |
| --- | --- | --- |
| Entorno | Git instalado | Verificado: Git 2.55.0 |
| Entorno | VS Code instalado | Verificado en macOS |
| Preparación | Estructura y documentación inicial | Archivos creados; aún sin aplicación |

## Pendientes del MVP

- Seis combinaciones: tamaños 6/8/9 y formatos HSL/HEX.
- Correspondencia entre muestras visuales y códigos.
- Generaciones y cambios de tamaño repetidos sin acumulación de tarjetas.
- Microfeedback, teclado, labels, foco visible y contraste.
- Móvil, tablet y desktop sin desbordamientos que impidan el uso.
- Console y Network sin errores de la aplicación.
- URL pública, repositorio público y documentación accesible.

## Paso 3: página inicial

- Verificado en Chrome en http://127.0.0.1:5500/: título, encabezados, mensaje inicial, lista vacía y botón deshabilitado.
- Inspección visual desktop: CSS aplicado, contenido legible y sin solapamientos en la vista inspeccionada.
- git diff --check: sin errores tras normalizar espacios finales.
- Pruebas de generación, responsive completo, accesibilidad y consola: pendientes de sus etapas.

## Paso 4: seis colores HEX

- Chrome: tres generaciones consecutivas; seis tarjetas tras cada generación, sin acumulación.
- Estado inicial vacío y botón habilitado al conectar el evento; mensaje actualizado con número de generación.
- DOM inspeccionado: seis códigos HEX y cero atributos style.
- Revisión visual: muestras coloreadas. Registro de consola del navegador: sin errores ni advertencias capturados.
- Prueba de lógica en Node con objetos mínimos para cargar el script; no simula ni valida el render: paletas de tamaño 6 y 0; 1000 códigos con formato válido; Math.random controlado en los extremos produce #000000 y #FFFFFF.
- Validación de tamaños inválidos y formatos HSL: pendientes de etapas siguientes.

## Paso 5: selector de tamaño

- Chrome: generación inicial de seis colores, cambios 6 → 8 → 9 → 6 y otro clic. Conteos comprobados: 6, 8, 9, 6 y 6.
- Mensaje de estado coherente en las cinco generaciones. Registro de consola sin errores ni advertencias capturados.
- Pruebas de lógica en Node: tamaños válidos 6/8/9; RangeError para 0, 7, -1, 6.5, NaN, null y texto "6". La interfaz convierte el valor del select a número antes de llamar a la función.
- Cambio respecto al paso 4: tamaño 0 ya no devuelve una paleta vacía; ahora se rechaza porque no es una opción permitida por la consigna.

## Paso 6: HSL y alternancia

- Node: nueve colores conocidos (primarios, secundarios, negro, blanco y gris) convertidos correctamente a HEX.
- Node: seis combinaciones tamaño/formato y formato inválido rechazado.
- Node: 1000 conversiones HEX → HSL → HEX con diferencia máxima permitida de 1 por canal RGB.
- Chrome: seis combinaciones 6/8/9 × HEX/HSL, conteo correcto y HEX válido siempre visible. HSL visible solo en ese modo.
- Chrome: alternar HSL a HEX conserva todos los códigos de la paleta. Sin errores ni advertencias capturados en consola.
