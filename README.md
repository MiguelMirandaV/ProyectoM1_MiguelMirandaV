# Colorfly Studio - Paletanator 3,000

Proyecto del módulo 1 del Full Stack Bootcamp: Aplicación web estática para explorar paletas de colores aleatorias.

## Estado actual

Paso 4: el botón genera seis colores HEX y reemplaza las tarjetas anteriores. Incluye feedback visible. Selectores 6/8/9, modo HSL y publicación siguen pendientes.

## Alcance previsto

- Generar paletas de 6, 8 o 9 colores.
- Alternar entre HSL y HEX, conservando el código HEX visible.
- Mostrar tarjetas dinámicas y feedback accesible.
- Usar HTML semántico y diseño adaptable con foco y contraste visibles.
- Publicar en GitHub Pages y documentar pruebas y uso de IA.

## Tecnologías

HTML5, CSS y JavaScript. Git para control de versiones locales y GitHub para públicas, GitHub Pages para producción. Sin backend ni dependencias de aplicación.

## Estructura

```text
index.html         Estructura de la página
css/styles.css     Estilos y responsividad a pantallas de dispositivos
css/palette.css    Hoja de colores que JavaScript actualiza en memoria
js/script.js       Interactividad, eventos y actualización del DOM
docs/uso-ia.md     Registro de uso de IA y decisiones
docs/pruebas.md    Pruebas
```

## Ejecución local

Abre la carpeta en VS Code. Desde su terminal, ejecuta `python3 -m http.server 5500 --bind 127.0.0.1` y visita http://127.0.0.1:5500. Detén el servidor con Control+C. Python solo sirve los archivos durante el desarrollo; no es una dependencia de la aplicación. También puedes usar Live Server si ya lo tienes instalado.

## Uso y despliegue

Pulsa Generar paleta para obtener seis colores con sus códigos HEX. Cada clic reemplaza la paleta anterior. La publicación y los selectores siguen pendientes.

## Decisiones técnicas

- Separar estructura, estilos y comportamiento en tres archivos principales.
- Construir primero el flujo básico; completar requisitos antes de incorporar extras.
- Mantener commits pequeños, descriptivos y vinculados con cambios reales.
- Documentar resultados verificados, sin presentar funcionalidades pendientes como terminadas.

## Pruebas y uso de IA

Consulta el [registro de pruebas](docs/pruebas.md) y el [registro de IA](docs/uso-ia.md).

## Mejoras opcionales

Copiar HEX, bloqueo de colores, guardado local y animaciones. Fuera del alcance inicial; se considerarán después de verificar la entrega obligatoria.

## Evidencias

Carpeta de Drive y capturas pendientes. Se incorporarán antes de la entrega.
