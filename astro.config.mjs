// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// En Vercel la URL de producción llega por variable de entorno; sirve para las URL absolutas de Open Graph.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export default defineConfig({
  site: vercelUrl ? `https://${vercelUrl}` : 'http://localhost:4321',
  // CSS en línea: evita una petición que bloquea el primer pintado en celular
  build: { inlineStylesheets: 'always' },
  vite: { plugins: [tailwindcss()] },
});
