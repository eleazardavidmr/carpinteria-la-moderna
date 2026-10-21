// Datos del negocio. Taller Nogal es una marca ficticia: este sitio es un concepto de demostración.

export const negocio = {
  nombre: 'Taller Nogal',
  eslogan: 'Oficio a la medida',
  aniosOficio: 25,
  // Formato internacional para wa.me
  whatsapp: '573000000042',
  telefono: '+573000000042',
  telefonoVisible: '+57 300 000 0042',
  correo: 'hola@tallernogal.example.com',
  direccion: 'Calle 12 #34-56',
  sector: 'Barrio Central',
  ciudad: 'Ciudad Demo',
  calificacion: '4.9',
  resenas: 120,
  instagram: 'https://www.instagram.com/tallernogal_demo/',
  facebook: 'https://www.facebook.com/tallernogal_demo',
  // Sitio de demostración: no se indexa en Google.
  indexar: false,
  // El formulario de solicitud muestra todo el flujo, pero no envía datos.
  solicitudesDemo: true,
} as const;

export const links = {
  whatsapp: `https://wa.me/${negocio.whatsapp}`,
  resenas: '#resenas',
  comoLlegar: '#contacto',
};
