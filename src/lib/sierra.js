// Geometría de la sierra circular del logo provisional (viewBox 0 0 100 100).
// La usan el componente Logo y scripts/generar-iconos.mjs (favicon y Open Graph).

const C = 50;

/** @param {number} r @param {number} a */
const punto = (r, a) => `${(C + r * Math.cos(a)).toFixed(2)} ${(C + r * Math.sin(a)).toFixed(2)}`;

/** @param {number} r */
const circulo = (r) => `M${C - r} ${C}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0Z`;

/**
 * Hoja con dientes, anillo de brida y agujero central. Se pinta con fill-rule="evenodd".
 * @param {{ dientes?: number, exterior?: number, garganta?: number }} [opciones]
 */
export function caminoSierra({ dientes = 24, exterior = 49, garganta = 41 } = {}) {
  const paso = (Math.PI * 2) / dientes;
  let d = '';
  for (let i = 0; i < dientes; i++) {
    const a = i * paso - Math.PI / 2;
    d += `${i === 0 ? 'M' : 'L'}${punto(garganta, a)}L${punto(exterior, a + paso * 0.8)}L${punto(garganta + 2, a + paso * 0.86)}`;
  }
  return `${d}Z${circulo(21)}${circulo(18)}${circulo(6.5)}`;
}

/**
 * Formón horizontal apuntando a la derecha, en un lienzo de `largo` × 12.
 * @param {number} largo
 */
export function caminoFormon(largo) {
  const mango = largo * 0.34;
  const virola = 6;
  const punta = largo - 8;
  return [
    // mango redondeado
    `M6 1h${mango - 6}v10H6a5 5 0 0 1 0-10Z`,
    // virola
    `M${mango + 1.5} 2h${virola}v8h-${virola}Z`,
    // hoja con bisel
    `M${mango + virola + 3} 3.5H${punta}L${largo} 8.5H${mango + virola + 3}Z`,
  ].join('');
}
