# Registro del uso de IA

Herramienta: Codex. Uso: tutoría, planificación, implementación y revisión. El estudiante revisa los cambios, practica el flujo de trabajo y contrasta los resultados con la consigna.

## 1. Planificación y restricciones

Extracto literal del prompt inicial del estudiante:

> Propón un plan de trabajo para desarrollar el proyecto integrador, siguiendo el conocimiento aprendido, mejores prácticas, evitando errores comunes, etc. Sé explicativo en cada paso, pero desarróllalo por completo, yo no debería escribir código, sino comprenderlo y realizar el flujo de trabajo de carpeta local, visual studio, git, terminal, dom y github.

Contexto aportado: lectures M1L1–M1L7, consigna, rúbrica y guía de desarrollo. Restricciones: trabajo por etapas, JavaScript puro, buenas prácticas y prevención de errores de IA según M1L6.

Resultado: plan por etapas con generación, DOM, accesibilidad, documentación y publicación. La guía llevó a adelantar el primer flujo funcional y a incluir responsive y comprobación de repositorio público.

## 2. Preparación del proyecto

El asistente creó la estructura, archivos vacíos de aplicación, README, .gitignore y estos registros.

Validación prevista de esta etapa: revisar archivos, primer commit y sincronización con GitHub. Añadir resultados al finalizar la comprobación.

## Evidencia visual

Pendiente: capturas de las conversaciones y de los resultados. Deben mostrar los prompts y respuestas reales, junto con su relación con el código. No se han generado capturas ficticias.

## Registro de futuras iteraciones

Para cada avance: prompt o extracto real, resultado, decisión adoptada o corregida, archivos afectados, comprobación ejecutada y captura correspondiente. Los prompts resumidos se identificarán como resúmenes.

## 3. Página inicial

Mensaje del estudiante: «se completó la subida». Continuación del plan aprobado: construir la base semántica y los estilos iniciales.

Resultado: header, main, footer, secciones tituladas, botón, lista de colores y región de estado; CSS externo con Grid/Flexbox y foco visible. Se conservó el nombre Paletanator 3,000 que el estudiante incorporó al README. El botón queda deshabilitado para no presentar como funcional una acción aún pendiente.

Decisión: separar la estructura del comportamiento y usar defer para ejecutar el futuro JavaScript después de procesar el HTML. Comprobación ejecutada: página abierta en Chrome y revisión visual desktop. Generación y auditoría completa pendientes. Las capturas de entrega se recopilarán en la etapa de evidencias.

## 4. Generación de seis colores

Prompt del estudiante: «entendido, ahora sí LISTO, continúa». Continuación del paso 4 del plan aprobado.

Resultado: funciones generateHexColor, generatePalette, renderPalette y handleGeneratePalette; creación de tarjetas con APIs del DOM y texto con textContent. Hoja palette.css separada para modificar colores mediante CSSOM sin atributos style.

Decisión: mantener texto sobre superficie blanca; eliminar tarjetas y reglas de color anteriores antes de renderizar. CSSOM y creación de nodos se explican como ampliaciones puntuales del módulo.

Validación: clics reales en Chrome y pruebas de funciones en Node, detalladas en pruebas.md. Una consulta automatizada a la propiedad sheet no estuvo disponible en el entorno de inspección; se usaron inspección del DOM y revisión visual, sin presentarla como error de la aplicación.

## 5. Selector de tamaño

Prompt del estudiante: «subida completa». Continuación del paso 5 del plan aprobado.

Resultado: select nativo con label asociado, evento change y botón que comparten la función de generación. Number convierte la selección de texto a número; se validan explícitamente 6/8/9.

Validación: secuencia real 6 → 8 → 9 → 6 en Chrome y casos inválidos en Node. Se actualizó el contrato de generatePalette para rechazar tamaños fuera de la consigna.
