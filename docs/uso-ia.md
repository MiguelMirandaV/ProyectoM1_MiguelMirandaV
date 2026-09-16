# Registro del uso de IA

Herramienta: Codex. Uso: tutoría, planificación, implementación y revisión. El estudiante revisa los cambios, practica el flujo de trabajo y contrasta los resultados con la consigna.

## 1. Planificación y restricciones

Extracto literal del prompt inicial del estudiante:

> Propón un plan de trabajo para desarrollar el proyecto integrador, siguiendo el conocimiento aprendido, mejores prácticas, evitando errores comunes, etc. Sé explicativo en cada paso, pero desarróllalo por completo, yo no debería escribir código, sino comprenderlo y realizar el flujo de trabajo de carpeta local, visual studio, git, terminal, dom y github.

Contexto aportado: lectures M1L1–M1L7, consigna, rúbrica y guía de desarrollo. Restricciones: trabajo por etapas, JavaScript puro, buenas prácticas y prevención de errores de IA según M1L6.

Resultado: plan por etapas con generación, DOM, accesibilidad, documentación y publicación. La guía llevó a adelantar el primer flujo funcional y a incluir responsive y comprobación de repositorio público.

## 2. Preparación del proyecto

El asistente creó la estructura, archivos vacíos de aplicación, README, .gitignore y estos registros.

Validación realizada: estructura revisada, primer commit registrado y sincronización con GitHub confirmada. Los avances posteriores también quedaron versionados por etapas.

## Evidencia visual

Las capturas reales de la aplicación están en [flujo-app.md](flujo-app.md). El estudiante incorporó seis capturas de conversación, enlazadas al final de este documento. Los extractos textuales siguientes complementan esas evidencias.

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

## 6. HSL y alternancia de formatos

Prompt del estudiante: «ok, ya hice el push del paso 5, LISTO». Continuación del paso 6 aprobado.

Resultado: selector de formato con label; colores como objetos HEX/HSL; funciones de conversión y generación según modo; estado currentPalette que conserva colores al cambiar de vista. HEX visible en todos los casos.

Decisiones: HEX como referencia para evitar cambios visuales al alternar; HSL equivalente redondeado a dos decimales. La conversión matemática, parseInt con base 16, slice, toString(16) y padStart son ampliaciones explicadas de los fundamentos del módulo. Referencia consultada: HSL en MDN.

Validación: colores conocidos, 1000 conversiones de ida y vuelta y seis combinaciones reales en Chrome, documentadas en pruebas.md. La vista previa se reinició al detectar que el servidor local estaba detenido.

## 7. Revisión del MVP

Prompt del estudiante: «LISTO, sigue con paso 7».

Resultado: ajuste de columnas según cantidad, controles móviles adaptables y foco del destino del enlace de salto.

Influencia de las pruebas: el diseño previo podía dejar una fila con cinco tarjetas y otra con una; se reemplazó por distribuciones equilibradas para los tamaños de la consigna. Se comprobó funcionamiento en 24 combinaciones, geometría sin desbordamiento a cuatro anchos, teclado, foco y contraste calculado. Resultados y límites registrados en pruebas.md.

## 8. Aclaraciones y revisión crítica

Extractos literales de preguntas del estudiante:

> por qué utilizas var en el css (e.g.   background-color: var(--color-background);) ? por qué utilizas skip link? y por qué escogiste las fuentes que escogiste?

> por qué usaste XML? hizo parte de mi material de estudio?

> por qué 8 debe ser texto inicialmente?

Relación con el proyecto: revisar las variables CSS, la navegación mediante enlace de salto, la elección de fuentes y el tipo de dato devuelto por los controles HTML. El valor de un select se lee como texto y `Number` permite convertirlo para validarlo como tamaño. La aplicación usa HTML, CSS y JavaScript; no necesita un archivo XML. Las APIs adicionales se deben comprender y verificar, sin asumir que toda propuesta de IA pertenece al temario.

## 9. Documentación y entrega en el repositorio

Prompt del estudiante: «LISTO, sigue con paso 9».

Aclaración posterior del estudiante (extracto literal):

> no es necesario adjuntar un drive, solo compartir el link al repo de github con todos los archivos pertinentes ahí

Decisión: guardar documentación y evidencias en `docs/` dentro del repositorio, sin Drive. La IA preparó el README, el flujo documentado y cinco capturas reales de la aplicación local. El estudiante añadió seis capturas de conversación y subió la documentación en el commit ea2b931. La publicación se verificó posteriormente en el paso 10.

## Capturas de conversación incorporadas por el estudiante

- [Captura IA0](evidencias/IA0.png).
- [Captura IA1](evidencias/IA1.png).
- [Captura IA2](evidencias/IA2.png).
- [Captura IA3](evidencias/IA3.png).
- [Captura IA4](evidencias/IA4.png).
- [Captura IA5](evidencias/IA5.png).

## 10. Publicación

El estudiante configuró GitHub Pages desde main y la raíz del repositorio. Se abrió la URL pública en Chrome y se probaron 6/8/9 colores en HEX/HSL, la conservación de HEX al alternar formato y los mensajes de estado. La consola capturada no registró errores ni advertencias. Se actualizó el README con el enlace público; esta actualización documental requiere un último commit y push.
