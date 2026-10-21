import type { NombreIcono } from '../lib/iconos';

export interface Categoria {
  nombre: string;
  icono: NombreIcono;
}

// Lo que fabrica el taller. Alimenta la sección "Qué hacemos" y el formulario de solicitud.
export const categorias: Categoria[] = [
  { nombre: 'Cocinas integrales', icono: 'cocina' },
  { nombre: 'Clósets', icono: 'closet' },
  { nombre: 'Centros de entretenimiento', icono: 'tv' },
  { nombre: 'Bibliotecas y estanterías', icono: 'biblioteca' },
  { nombre: 'Escritorios y muebles de oficina', icono: 'escritorio' },
  { nombre: 'Muebles de baño', icono: 'bano' },
  { nombre: 'Muros WPC', icono: 'wpc' },
  { nombre: 'Camas', icono: 'cama' },
  { nombre: 'Puertas', icono: 'puerta' },
];

// Opciones del formulario que no son una categoría de "Qué hacemos"
export const ARMARIO_PREFABRICADO = 'Armado de armario prefabricado';
export const OTRO_MUEBLE = 'Otro mueble a medida';
