import type { ImageMetadata } from 'astro';

const archivos = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/images/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

/** Devuelve la imagen de src/assets/images/ por nombre de archivo. Falla el build si no existe. */
export function imagen(nombre: string): ImageMetadata {
  const modulo = archivos[`../assets/images/${nombre}`];
  if (!modulo) {
    throw new Error(`No existe src/assets/images/${nombre}. Revise src/data/portafolio.ts.`);
  }
  return modulo.default;
}
