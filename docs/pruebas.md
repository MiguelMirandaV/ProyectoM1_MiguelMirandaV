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
