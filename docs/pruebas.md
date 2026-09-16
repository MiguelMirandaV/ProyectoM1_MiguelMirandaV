# Registro de pruebas

Este registro reúne las comprobaciones ejecutadas por Codex durante el desarrollo y la publicación. Utilicé los resultados para revisar el avance del proyecto. Las secciones por paso conservan el historial y explican los cambios de comportamiento; los límites de la revisión se indican expresamente.

| Etapa | Comprobación | Resultado |
| --- | --- | --- |
| Entorno | Git instalado | Verificado: Git 2.55.0 |
| Entorno | VS Code instalado | Verificado en macOS |
| Preparación | Estructura y documentación inicial | Archivos creados; aún sin aplicación |

## Alcance de la revisión

- Seis combinaciones: tamaños 6/8/9 y formatos HSL/HEX.
- Correspondencia entre muestras visuales y códigos.
- Generaciones y cambios de tamaño repetidos sin acumulación de tarjetas.
- Microfeedback, teclado, labels, foco visible y contraste.
- Móvil, tablet y desktop sin desbordamientos que impidan el uso.
- Consola sin errores capturados y comprobación de carga de la aplicación; no se presenta una auditoría exhaustiva de Network.
- URL pública y enlaces a la documentación del repositorio.

## Paso 3: página inicial

- Verificado en Chrome en http://127.0.0.1:5500/: título, encabezados, mensaje inicial, lista vacía y botón deshabilitado.
- Inspección visual desktop: CSS aplicado, contenido legible y sin solapamientos en la vista inspeccionada.
- git diff --check: sin errores tras normalizar espacios finales.
- La generación, el responsive, la accesibilidad básica y la consola se revisaron en etapas posteriores, descritas abajo.

## Paso 4: seis colores HEX

- Chrome: tres generaciones consecutivas; seis tarjetas tras cada generación, sin acumulación.
- Estado inicial vacío y botón habilitado al conectar el evento; mensaje actualizado con número de generación.
- DOM inspeccionado: seis códigos HEX y cero atributos style.
- Revisión visual: muestras coloreadas. Registro de consola del navegador: sin errores ni advertencias capturados.
- Prueba de lógica en Node con objetos mínimos para cargar el script; no simula ni valida el render: paletas de tamaño 6 y 0; 1000 códigos con formato válido; Math.random controlado en los extremos produce #000000 y #FFFFFF.
- Los tamaños inválidos y el formato HSL se verificaron en los pasos 5 y 6.

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

## Paso 7: auditoría del MVP local

### Cambios derivados de la revisión

- La cuadrícula anterior podía distribuir seis tarjetas en cinco y una. Se usan 3 × 2 para seis, 4 × 2 para ocho y 3 × 3 para nueve en escritorio desde 64rem.
- Móvil con una columna, controles adaptables y botón de ancho completo; tablet con dos columnas desde 40rem.
- main tiene tabindex=-1 para recibir foco desde el enlace de salto sin agregarse al recorrido normal con Tab.
- role=list conserva explícitamente la semántica de lista al quitar los marcadores visuales mediante CSS.

### Resultados ejecutados

| Comprobación | Resultado |
| --- | --- |
| 6/8/9 × HEX/HSL a 320, 390, 768 y 1440 px | 24 combinaciones correctas; conteo y visibilidad de HSL correctos |
| Ancho de página y texto a los cuatro tamaños, con 8 colores HSL | Sin desbordamiento horizontal de página ni de códigos/controles |
| Inspección visual | Móvil, tablet y escritorio revisados; tarjetas legibles |
| Teclado | Tab llega a salto; Enter enfoca main; Tab recorre cantidad, formato y botón; Enter genera seis colores |
| Foco | Contorno azul visible en botón al navegar con teclado |
| Semántica y referencias | Un main y un h1; IDs únicos; labels asociados; referencias ARIA válidas |
| Recursos | Rutas relativas de hojas CSS y JS apuntan a archivos existentes |
| Estilos inline | Ninguno en HTML; colores dinámicos en hoja externa |
| Consola | Sin errores ni advertencias capturados durante las combinaciones |
| git diff --check | Sin errores |

Contrastes calculados con luminancia relativa sRGB: texto/fondo 14.52:1; texto secundario/fondo 6.35:1; secundario/tarjeta 6.83:1; texto/botón 13.93:1; texto/botón hover 12.17:1; foco/fondo 5.92:1.

Límites: revisión de accesibilidad básica, sin prueba auditiva de lector de pantalla ni certificación WCAG. El chequeo estructural local no sustituye una validación completa del estándar HTML. La comprobación del sitio publicado se documenta en el paso 10. No se implementaron extras.


## Paso 10: comprobación pública — 2026-09-16

URL: https://miguelmirandav.github.io/ProyectoM1_MiguelMirandaV/

- Configuración observada: Deploy from a branch, main, /(root).
- Chrome: generación real de 6, 8 y 9 colores en HEX y HSL; conteos y códigos visibles correctos en las seis combinaciones.
- Alternancia de HSL a HEX con nueve colores: los nueve HEX permanecieron iguales.
- Mensajes de generación y cambio de vista presentes.
- Revisión visual: estilos y muestras de color presentes en el sitio público.
- Consola capturada durante esta comprobación: sin errores ni advertencias.

Las pruebas responsive detalladas del paso 7 se realizaron localmente; no se repitió toda esa matriz en el despliegue público.
