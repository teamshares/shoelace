/* Read from the JSON source of truth and write a css file using the template */

import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import prettier from 'prettier';
import tokens from './../src/styles/tokens.json' assert { type: 'json' };

const colorFamilies = ['blue', 'gray', 'red', 'green', 'yellow', 'teal', 'purple', 'fuchsia'];
const colors = tokens.colors;
const variablePrefix = '--ts-color-';

function hexToRgb(hex) {
  const hexValue = hex.replace('#', '');
  const r = parseInt(hexValue.substring(0, 2), 16);
  const g = parseInt(hexValue.substring(2, 4), 16);
  const b = parseInt(hexValue.substring(4, 6), 16);
  return { r, g, b };
}

function generateColorVariables(colorFamily) {
  let css = `  /** ${colorFamily} */\n`;
  let hexCss = ``;
  let rgbCss = ``;
  for (const weight in colors[colorFamily]) {
    const colorValue = colors[colorFamily][weight];
    hexCss += `  ${variablePrefix}${colorFamily}-${weight}: ${colorValue};\n`;
    const rgbValue = hexToRgb(colorValue);
    rgbCss += `  ${variablePrefix}${colorFamily}-${weight}-rgb: ${rgbValue.r}, ${rgbValue.g}, ${rgbValue.b};\n`;
  }
  css += hexCss + rgbCss;
  return css;
}

function generateSemanticVariants(semanticFamily, colorFamily) {
  let css = `  /** ${semanticFamily} => ${colorFamily} */\n`;
  for (const weight in colors[colorFamily]) {
    css += `  ${variablePrefix}${semanticFamily}-${weight}: var(${variablePrefix}${colorFamily}-${weight});\n`;
  }
  return css;
}

function generateShoelaceColorOverride(colorFamily) {
  let css = `  /** ${colorFamily} override */\n`;
  // Use the weights from blue for all of these
  for (const weight in colors['blue']) {
    css += `  --sl-color-${colorFamily}-${weight}: var(${variablePrefix}${colorFamily}-${weight});\n`;
  }
  return css;
}

console.log('Generating tokens CSS');

let cssContent =
  `/** *********************************************************************\n` +
  `/** Tokens generated from /src/styles/tokens.json\n` +
  `/** Do not edit this file directly. Make changes in the json\n` +
  `/** and then run 'npm run build'\n` +
  `/** ********************************************************************* **/\n` +
  `\n` +
  `:host,\n:root,\n.sl-theme-light {\n` +
  `\n\n  /***** Generated colors **/\n\n`;

for (const colorFamily of colorFamilies) {
  if (colors[colorFamily]) {
    cssContent += generateColorVariables(colorFamily);
  }
}

cssContent += `\n  /***** Semantic color variants **/\n\n`;

const semanticHash = {
  primary: 'blue',
  success: 'green',
  warning: 'yellow',
  danger: 'red',
  neutral: 'gray'
};
for (const semanticFamily in semanticHash) {
  cssContent += generateSemanticVariants(semanticFamily, semanticHash[semanticFamily]);
}

cssContent += `\n  /***** Shoelace color overrides **/\n\n`;

const shoelaceColors = colorFamilies.concat(Object.keys(semanticHash));
for (const shoelaceColor of shoelaceColors) {
  cssContent += generateShoelaceColorOverride(shoelaceColor);
}

cssContent += `\n  /***** Other generated tokens **/\n\n`;

const font = tokens.fontFamily;
cssContent +=
  `  /**** Generated fonts **/\n` +
  `  --ts-font-sans: ${font.sans};\n` +
  `  --ts-font-serif: ${font.serif};\n` +
  `  --ts-font-mono: ${font.mono};\n` +
  `  --ts-font-body: var(--ts-font-sans);\n` +
  `  --ts-font-display: var(--ts-font-serif);\n`;

cssContent += `}\n`;

cssContent = await prettier.format(cssContent, { parser: 'css' });

// Write the CSS file

const fileName = path.join('./src/styles/exports', 'generated.css');
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>.');
fs.writeFileSync(fileName, cssContent, 'utf8');
