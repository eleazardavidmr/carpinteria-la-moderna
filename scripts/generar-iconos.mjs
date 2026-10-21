// Genera favicon, apple-touch-icon e imagen Open Graph (public/).
// Uso: npm run iconos
// Si existe public/images/logo.png, la imagen OG lo usa; si no, usa el logo provisional.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { caminoSierra } from '../src/lib/sierra.js';

const raiz = path.resolve(import.meta.dirname, '..');
const pub = (...p) => path.join(raiz, 'public', ...p);

const TINTA = '#121212';
const PAPEL = '#FFFFFF';
const NIEBLA = '#F1F1EF';
const GRIS = '#5B5B58';
const AMBAR = '#E9B35A';
const sierra = caminoSierra();

// ---------- Favicon ----------
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="16" fill="${TINTA}"/>
  <path d="${sierra}" transform="translate(7 7) scale(.5)" fill="${PAPEL}" fill-rule="evenodd"/>
</svg>`;
fs.writeFileSync(pub('favicon.svg'), favicon);
await sharp(Buffer.from(favicon)).resize(32, 32).png().toFile(pub('favicon-32.png'));

const touch = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
  <rect width="180" height="180" fill="${TINTA}"/>
  <path d="${sierra}" transform="translate(30 30) scale(1.2)" fill="${PAPEL}" fill-rule="evenodd"/>
</svg>`;
await sharp(Buffer.from(touch)).png().toFile(pub('apple-touch-icon.png'));

// ---------- Open Graph 1200×630 ----------
// Mismo lenguaje del sitio: fondo claro, foto en tarjeta redondeada y chip de reseñas.
const W = 1200;
const H = 630;
const M = 24; // margen alrededor de la foto
const anchoFoto = 500;
const altoFoto = H - M * 2;
const mascara = Buffer.from(
  `<svg width="${anchoFoto}" height="${altoFoto}"><rect width="${anchoFoto}" height="${altoFoto}" rx="36"/></svg>`,
);
// Parte izquierda de la foto: cava iluminada y gabinetes
const foto = await sharp(path.join(raiz, 'src/assets/images/cocina-cava.jpg'))
  .resize(anchoFoto, altoFoto, { fit: 'cover', position: 'left' })
  .composite([{ input: mascara, blend: 'dest-in' }])
  .png()
  .toBuffer();

const fuente = "Inter, 'Segoe UI', Arial, sans-serif";
const fuenteLogo = "Montserrat, 'Segoe UI', Arial, sans-serif";
const logoPng = pub('images/logo.png');
const tienePng = fs.existsSync(logoPng);

const marca = tienePng
  ? ''
  : `<path d="${sierra}" transform="translate(72 72) scale(.72)" fill="${TINTA}" fill-rule="evenodd"/>
     <text x="162" y="102" font-family="${fuenteLogo}" font-size="16" font-weight="700" letter-spacing="6" fill="${TINTA}">EBANISTERÍA</text>
     <text x="160" y="138" font-family="${fuenteLogo}" font-size="35" font-weight="800" fill="${TINTA}">TALLER NOGAL</text>`;

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="${NIEBLA}"/>
  ${marca}
  <text font-family="${fuente}" font-weight="500" fill="${TINTA}" font-size="66" letter-spacing="-2.5">
    <tspan x="72" y="300">Muebles hechos</tspan>
    <tspan x="72" y="372">a su medida</tspan>
  </text>
  <text x="72" y="432" font-family="${fuente}" font-size="25" fill="${GRIS}">Cocinas, clósets y vestieres · 25 años de oficio</text>
  <rect x="72" y="486" width="372" height="58" rx="29" fill="${PAPEL}"/>
  <text x="98" y="523" font-family="${fuente}" font-size="22" font-weight="500" fill="${TINTA}"><tspan fill="${AMBAR}">★★★★★</tspan>  4.9 · 120 reseñas</text>
</svg>`;

const capas = [{ input: foto, left: W - anchoFoto - M, top: M }];
if (tienePng) {
  // Logo negro sobre blanco: al multiplicar, el blanco desaparece sobre el fondo claro
  const logo = await sharp(logoPng).resize({ height: 110, fit: 'inside' }).toBuffer();
  capas.push({ input: logo, left: 72, top: 56, blend: 'multiply' });
}

await sharp(Buffer.from(og)).composite(capas).jpeg({ quality: 88, mozjpeg: true }).toFile(pub('og.jpg'));

console.log('Listo: favicon.svg, favicon-32.png, apple-touch-icon.png, og.jpg', tienePng ? '(con logo.png)' : '(logo provisional)');
