# Taller Nogal · sitio de demostración

Concepto one-page para una ebanistería de muebles a medida. **Taller Nogal es una marca ficticia**: nombre,
teléfono, dirección, cifras y redes son datos de ejemplo. Hecho por EDMR · edmr.dev.

Astro 7 + Tailwind 4. Todo el proceso ocurre en la web: el formulario de solicitud (mueble, medidas, fotos,
datos de contacto) recorre el flujo completo hasta la confirmación, en modo demostración
(`solicitudesDemo` en `src/data/negocio.ts`): no envía ningún dato.

Demo publicada en https://taller-nogal.demo.edmr.dev

## Diseño
Tarjetas muy redondeadas, chips y burbujas sobre las fotos, tipografía Inter de peso medio con tracking cerrado,
una frase que se ilumina al hacer scroll, tarjetas apiladas 01/03, sección oscura de contacto y la marca en grande
en el pie. El color de acento es un ámbar cálido (tokens en `src/styles/global.css`). Montserrat solo se usa en el logo.

## Comandos

```bash
npm install
npm run dev      # http://localhost:4321
npm run dev:celular  # igual, pero accesible desde el celular en la misma red (usa la URL "Network")
npm run build    # astro check + build en dist/
npm run iconos   # regenera favicon, apple-touch-icon y og.jpg
```

## Dónde se cambia cada cosa

| Qué | Archivo |
|---|---|
| Datos del negocio (teléfono, dirección, redes, calificación) | `src/data/negocio.ts` |
| Categorías de "Qué hacemos" y del formulario | `src/data/categorias.ts` |
| Fotos del portafolio | `src/data/portafolio.ts` + archivos en `src/assets/images/` |

### Agregar fotos al portafolio
1. Copie la foto a `src/assets/images/` (jpg, png o webp). Astro la convierte a AVIF/WebP en el build.
2. Agregue una entrada en `src/data/portafolio.ts` con `src`, `categoria`, `titulo` y `alt`.

Los filtros se arman solos: solo aparecen las categorías que tienen fotos.

### Logo
El logo es un SVG tipográfico (sierra + "Taller Nogal"). Para usar uno en imagen:
1. Guarde el archivo como `public/images/logo.png` (negro sobre blanco).
2. Ejecute `npm run iconos` para rehacer la imagen de Open Graph con ese logo.

Header y footer lo detectan solos (en fondos oscuros se invierte a blanco).

### Video del hero
Guarde el video como `public/video/video.mp4` (idealmente menos de 3 MB, 720p, sin audio). El hero lo
reproduce encima de la foto (muted, autoplay, loop, playsinline) y lo carga después de la página
para no afectar la velocidad. No se reproduce con "reducir movimiento" ni con ahorro de datos.

## Fotos
Fotos de stock de [Unsplash](https://unsplash.com/license) (licencia libre):
- `cocina-cava.jpg`: https://unsplash.com/photos/modern-kitchen-with-dark-grey-cabinets-OXlnlnaUc2s
- `centro-tv.jpg`: https://unsplash.com/photos/modern-living-room-with-wood-paneling-and-large-television-ey7iGGtoem8
- `closet-led.jpg`: https://unsplash.com/photos/walk-in-closet-with-wooden-shelves-eS5kmDAIhbw

## Publicar
El proyecto de Vercel está conectado a este repo: cada push a `main` publica en producción.
