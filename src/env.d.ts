/// <reference path="../.astro/types.d.ts" />
declare module "aos" {
  interface AOSOptions {
    duration?: number; // Duración de la animación en milisegundos
    offset?: number; // Desplazamiento en píxeles antes de activar la animación
    once?: boolean; // Ejecuta la animación solo una vez
    easing?: string; // Easing de la animación
    delay?: number; // Retraso antes de la animación
    mirror?: boolean;
  }

  function init(options?: AOSOptions): void;

  export default {
    init,
    refreshHard,
  };
}
