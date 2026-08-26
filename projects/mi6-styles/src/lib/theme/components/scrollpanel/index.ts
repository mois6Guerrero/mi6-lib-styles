import { MI6_COLORS } from '../../mi6-base-presets/mi6.variables';
/**
 * Importamos las definiciones de tokens y propiedades del componente ScrollPanel.
 * En `@primeuix/themes/types/scrollpanel` se encuentra la especificación oficial de los design tokens (`ScrollPanelTokenSections`) que describen las secciones disponibles (`root`, `bar`) y sus propiedades configurables.
 * Ver más en: import { ScrollPanelTokenSections } from '@primeuix/themes/types/scrollpanel';
 */
export default {
  root: {
    transitionDuration: '200ms'
  },
  bar: {
    borderRadius: '100px',
    background: MI6_COLORS.neutralBlue[400],
    size: '10px',
    focusRing: {
      width: '1px',
      style: 'solid',
      color: 'transparent',
      offset: '1px',
      shadow: '0 0 0 2px transparent'
    }
  },
  extend: {},
  css: `
    .p-scrollpanel-content, .p-scrollpanel-content-container {
      scrollbar-color: transparent ${MI6_COLORS.neutralBlue[50]};
      scrollbar-gutter: stable;
      scrollbar-width: auto;
      left: 1.5px;
    }
    .p-scrollpanel-bar, .p-scrollpanel-bar-y, .p-scrollpanel-bar-x {
       background: ${MI6_COLORS.neutralBlue[400]};
       opacity: 1;
    }
  `
};
