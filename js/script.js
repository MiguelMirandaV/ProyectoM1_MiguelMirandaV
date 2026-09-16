"use strict";

const generateButton = document.querySelector("#generate-button");
const paletteSize = document.querySelector("#palette-size");
const paletteFormat = document.querySelector("#palette-format");
const paletteList = document.querySelector("#palette-list");
const emptyState = document.querySelector("#empty-state");
const paletteStatus = document.querySelector("#palette-status");
const paletteStylesheet = document.querySelector("#palette-colors").sheet;
let generationCount = 0;
let currentPalette = [];

function generateHexColor() {
  const hexDigits = "0123456789ABCDEF";
  let color = "#";

  for (let position = 0; position < 6; position++) {
    const randomIndex = Math.floor(Math.random() * hexDigits.length);
    color += hexDigits[randomIndex];
  }

  return color;
}

function hslToHex(hue, saturation, lightness) {
  const s = saturation / 100;
  const l = lightness / 100;
  const chroma = (1 - Math.abs(2 * l - 1)) * s;
  const secondary = chroma * (1 - Math.abs((hue / 60) % 2 - 1));
  const offset = l - chroma / 2;
  let channels;

  // El círculo de matices se divide en seis sectores de 60 grados.
  if (hue < 60) channels = [chroma, secondary, 0];
  else if (hue < 120) channels = [secondary, chroma, 0];
  else if (hue < 180) channels = [0, chroma, secondary];
  else if (hue < 240) channels = [0, secondary, chroma];
  else if (hue < 300) channels = [secondary, 0, chroma];
  else channels = [chroma, 0, secondary];

  let hex = "#";
  channels.forEach(function (channel) {
    // Cada canal RGB ocupa dos dígitos, incluso cuando empieza con cero.
    hex += Math.round((channel + offset) * 255).toString(16).padStart(2, "0");
  });
  return hex.toUpperCase();
}

function hexToHsl(hex) {
  const red = parseInt(hex.slice(1, 3), 16) / 255;
  const green = parseInt(hex.slice(3, 5), 16) / 255;
  const blue = parseInt(hex.slice(5, 7), 16) / 255;
  const maximum = Math.max(red, green, blue);
  const minimum = Math.min(red, green, blue);
  const difference = maximum - minimum;
  const lightness = (maximum + minimum) / 2;
  let hue = 0;
  let saturation = 0;

  // En los grises no hay matiz; evitamos dividir entre cero.
  if (difference !== 0) {
    saturation = difference / (1 - Math.abs(2 * lightness - 1));
    if (maximum === red) hue = ((green - blue) / difference) % 6;
    else if (maximum === green) hue = (blue - red) / difference + 2;
    else hue = (red - green) / difference + 4;
    hue = (hue * 60 + 360) % 360;
  }

  return {
    hue: Math.round(hue * 100) / 100,
    saturation: Math.round(saturation * 10000) / 100,
    lightness: Math.round(lightness * 10000) / 100
  };
}

function formatHsl(hsl) {
  return "hsl(" + hsl.hue + ", " + hsl.saturation + "%, " + hsl.lightness + "%)";
}

function generateColor(format) {
  let hex;
  if (format === "hsl") {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 101);
    const lightness = Math.floor(Math.random() * 101);
    hex = hslToHex(hue, saturation, lightness);
  } else {
    hex = generateHexColor();
  }

  // HEX es la referencia común: alternar formatos nunca cambia la muestra.
  return { hex: hex, hsl: hexToHsl(hex) };
}

function generatePalette(size, format = "hex") {
  // El select entrega texto; su conversión a número se realiza en el evento.
  // Validar aquí también protege la función si se llama desde otro lugar.
  if (size !== 6 && size !== 8 && size !== 9) {
    throw new RangeError("El tamaño de la paleta debe ser 6, 8 o 9.");
  }

  const colors = [];
  if (format !== "hex" && format !== "hsl") {
    throw new RangeError("El formato debe ser HEX o HSL.");
  }

  for (let index = 0; index < size; index++) {
    colors.push(generateColor(format));
  }

  return colors;
}

function renderPalette(colors) {
  paletteList.dataset.size = colors.length;
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
    code.textContent = color.hex;

    const hslCode = document.createElement("code");
    hslCode.className = "hsl-code";
    hslCode.textContent = formatHsl(color.hsl);
    hslCode.hidden = paletteFormat.value !== "hsl";

    // Solo interpolamos colores generados internamente, nunca texto del usuario.
    paletteStylesheet.insertRule(
      ".color-swatch-" + index + " { background-color: " + color.hex + "; }",
      paletteStylesheet.cssRules.length
    );

    details.append(label, code, hslCode);
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

  const format = paletteFormat.value;
  if (format !== "hex" && format !== "hsl") {
    paletteStatus.textContent = "Selecciona un formato válido: HEX o HSL.";
    return;
  }

  currentPalette = generatePalette(size, format);
  renderPalette(currentPalette);
  generationCount++;
  paletteStatus.textContent = "Paleta " + generationCount + ": " + currentPalette.length + " colores generados en " + format.toUpperCase() + ".";
}

function handleFormatChange() {
  if (currentPalette.length === 0) {
    paletteStatus.textContent = "Formato " + paletteFormat.value.toUpperCase() + " seleccionado. Pulsa Generar paleta para empezar.";
    return;
  }

  renderPalette(currentPalette);
  paletteStatus.textContent = "Vista " + paletteFormat.value.toUpperCase() + ": se conservan los " + currentPalette.length + " colores. HEX siempre visible.";
}

generateButton.addEventListener("click", handleGeneratePalette);
paletteSize.addEventListener("change", handleGeneratePalette);
paletteFormat.addEventListener("change", handleFormatChange);
// Activamos el control solo después de conectar su comportamiento.
generateButton.disabled = false;
paletteSize.disabled = false;
paletteFormat.disabled = false;
