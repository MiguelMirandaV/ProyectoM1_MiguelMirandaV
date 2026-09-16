"use strict";

const generateButton = document.querySelector("#generate-button");
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
  const colors = generatePalette(6);
  renderPalette(colors);
  generationCount++;
  paletteStatus.textContent = "Paleta " + generationCount + ": " + colors.length + " colores HEX generados.";
}

generateButton.addEventListener("click", handleGeneratePalette);
// Activamos el control solo después de conectar su comportamiento.
generateButton.disabled = false;
