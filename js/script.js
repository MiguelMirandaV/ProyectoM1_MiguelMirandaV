"use strict";

const generateButton = document.querySelector("#generate-button");
const paletteSize = document.querySelector("#palette-size");
const paletteList = document.querySelector("#palette-list");
const emptyState = document.querySelector("#empty-state");
const paletteStatus = document.querySelector("#palette-status");
const paletteStylesheet = document.querySelector("#palette-colors").sheet;
let generationCount = 0;

function generateHexColor() {
  const hexDigits = "0123456789ABCDEF";
  let color = "#";

  for (let position = 0; position < 6; position++) {
    const randomIndex = Math.floor(Math.random() * hexDigits.length);
    color += hexDigits[randomIndex];
  }

  return color;
}

function generatePalette(size) {
  // El select entrega texto; su conversión a número se realiza en el evento.
  // Validar aquí también protege la función si se llama desde otro lugar.
  if (size !== 6 && size !== 8 && size !== 9) {
    throw new RangeError("El tamaño de la paleta debe ser 6, 8 o 9.");
  }

  const colors = [];

  for (let index = 0; index < size; index++) {
    colors.push(generateHexColor());
  }

  return colors;
}

function renderPalette(colors) {
  // Reemplazamos la paleta anterior; no acumulamos tarjetas ni reglas CSS.
  paletteList.replaceChildren();
  while (paletteStylesheet.cssRules.length > 0) {
    paletteStylesheet.deleteRule(0);
  }

  colors.forEach(function (color, index) {
    const card = document.createElement("li");
    card.className = "color-card";

    const swatch = document.createElement("div");
    swatch.className = "color-swatch color-swatch-" + index;
    swatch.setAttribute("aria-hidden", "true");

    const details = document.createElement("div");
    details.className = "color-details";

    const label = document.createElement("p");
    label.className = "color-label";
    label.textContent = "Color " + (index + 1);

    const code = document.createElement("code");
    code.className = "color-code";
    code.textContent = color;

    // Solo interpolamos colores generados internamente, nunca texto del usuario.
    paletteStylesheet.insertRule(
      ".color-swatch-" + index + " { background-color: " + color + "; }",
      paletteStylesheet.cssRules.length
    );

    details.append(label, code);
    card.append(swatch, details);
    paletteList.append(card);
  });

  emptyState.hidden = colors.length > 0;
}

function handleGeneratePalette() {
  const size = Number(paletteSize.value);
  if (size !== 6 && size !== 8 && size !== 9) {
    paletteStatus.textContent = "Selecciona una cantidad válida: 6, 8 o 9 colores.";
    return;
  }

  const colors = generatePalette(size);
  renderPalette(colors);
  generationCount++;
  paletteStatus.textContent = "Paleta " + generationCount + ": " + colors.length + " colores HEX generados.";
}

generateButton.addEventListener("click", handleGeneratePalette);
paletteSize.addEventListener("change", handleGeneratePalette);
// Activamos el control solo después de conectar su comportamiento.
generateButton.disabled = false;
paletteSize.disabled = false;
