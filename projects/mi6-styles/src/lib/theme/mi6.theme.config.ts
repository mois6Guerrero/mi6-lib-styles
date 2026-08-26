import Mi6Preset from './mi6.preset';

// Configuración del tema MI6 para PrimeNG
export const Mi6ThemeConfig = {
  theme:{
    preset: Mi6Preset,
    
    options: {
      // Se usa el selector para modo oscuro (coincide con el CSS global)
      darkModeSelector: '[data-theme="ligth"]',
      // (Opcional pero recomendado si se usa Tailwind v4 / layers)
      cssLayer: { 
        name: 'primeng', 
        order: 'theme, base, primeng' 
      }    
    }    
  }
  // otras opciones globales aquí (ripple, zIndex, etc.)
};
