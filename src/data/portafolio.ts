// Portafolio. Para agregar una foto:
//   1. Póngala en src/assets/images/ (jpg, png o webp; Astro la convierte a AVIF/WebP en el build).
//   2. Agregue una entrada abajo con el nombre del archivo en `src`.
// Los filtros se arman solos: solo aparecen las categorías que tienen al menos una foto.

export const categoriasPortafolio = [
  'Cocinas y bares',
  'Clósets',
  'Centros de entretenimiento',
  'Muros WPC',
  'Bibliotecas y estanterías',
  'Muebles comerciales',
  'Escritorios y oficina',
  'Muebles de baño',
  'Camas',
  'Puertas',
] as const;

export type CategoriaPortafolio = (typeof categoriasPortafolio)[number];

export interface Trabajo {
  /** Nombre del archivo dentro de src/assets/images/ */
  src: string;
  /** Una categoría o varias si la foto muestra más de un tipo de mueble. */
  categoria: CategoriaPortafolio | CategoriaPortafolio[];
  titulo: string;
  /** Descripción de lo que se ve en la foto, para lectores de pantalla y Google. */
  alt: string;
}

export const portafolio: Trabajo[] = [
  {
    src: 'cocina-cava.jpg',
    categoria: 'Cocinas y bares',
    titulo: 'Cocina gris con cava iluminada',
    alt: 'Cocina integral con gabinetes grises hasta el techo, nevera empotrada y cava vertical para vinos con luz LED cálida',
  },
  {
    src: 'centro-tv.jpg',
    categoria: ['Centros de entretenimiento', 'Muros WPC'],
    titulo: 'Muro de televisor en roble',
    alt: 'Pared de televisor revestida en paneles de roble claro, con el televisor empotrado y un mueble bajo abierto en tono piedra',
  },
  {
    src: 'closet-led.jpg',
    categoria: 'Clósets',
    titulo: 'Vestier con luz integrada',
    alt: 'Vestier en madera clara con barras de colgar, bancas bajas y perfiles de luz LED cálida en cada repisa',
  },
];
