import { MI6_COLORS } from '../../mi6-base-presets/mi6.variables';
/**
 * Importamos las definiciones de tokens y propiedades del componente InputText.
 * En `@primeuix/themes/types/inputtext` se encuentra la especificación oficial de los design tokens que describen las secciones disponibles y sus propiedades configurables.
 * Ver más en: import { InputTextTokenSections } from '@primeuix/themes/types/inputtext';
 */

export default {
  root: {
    background: MI6_COLORS.generico.white,
    disabledBackground: MI6_COLORS.neutralBlue[200],
    filledBackground: MI6_COLORS.neutralBlue[50],
    filledHoverBackground: MI6_COLORS.neutralBlue[100],
    filledFocusBackground: MI6_COLORS.primary[50],
    borderColor: MI6_COLORS.neutralBlue[400],
    hoverBorderColor: MI6_COLORS.primary[300],
    focusBorderColor: MI6_COLORS.primary[400],
    invalidBorderColor: MI6_COLORS.error[500],
    color: MI6_COLORS.neutralBlue[800],
    disabledColor: MI6_COLORS.neutralGray[600],
    placeholderColor: MI6_COLORS.neutralBlue[400],
    invalidPlaceholderColor: MI6_COLORS.neutralBlue[400],
    shadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
    paddingX: '0.75rem',
    paddingY: '0.5rem',
    borderRadius: '4px',
    focusRing: {
      width: '0px',
      style: 'solid',
      color: 'transparent',
      offset: '0px',
      shadow: `0 0 0 0px ${MI6_COLORS.primary[100]}`
    },
    transitionDuration: '200ms',
    sm: {
      fontSize: '0.875rem', // 14px
      paddingX: '0.5rem',
      paddingY: '0.375rem'
    },
    lg: {
      fontSize: '1rem', // 16px
      paddingX: '1rem',
      paddingY: '0.75rem'
    }
  },
  extend: {},
  css: `
    .p-inputtext {
      caret-color: ${MI6_COLORS.primary[400]};
      transition: all 200ms ease;
    }

    .p-inputtext::placeholder {
      color: ${MI6_COLORS.neutralBlue[400]};
    }

    .p-inputtext:focus {
      box-shadow: 0 0 0 2px #E1E1FEB2;
      caret-color: ${MI6_COLORS.primary[300]};
      color: ${MI6_COLORS.neutralBlue[900]};
    }

    .p-inputtext::selection {
      background: ${MI6_COLORS.primary[100]};
      color: ${MI6_COLORS.primary[900]};
    }

     /* Estilos para el input cuando está deshabilitado */
    .p-inputtext:disabled {
      cursor: not-allowed;
      opacity: 0.7;
      border-color: ${MI6_COLORS.neutralBlue[300]};
      background-color: ${MI6_COLORS.neutralBlue[200]};
      color: ${MI6_COLORS.neutralGray[700]};
    }

    /* Estilo de hover para el input deshabilitado (no cambia) */
    .p-inputtext:disabled:hover {
      border-color: ${MI6_COLORS.neutralBlue[300]};
      background-color: ${MI6_COLORS.neutralBlue[200]};
      color: ${MI6_COLORS.neutralGray[700]};
    }

    .p-inputtext.p-invalid {
      border-color: ${MI6_COLORS.error[500]};
      caret-color: ${MI6_COLORS.error[500]};
    }

    .p-inputtext.p-invalid:focus {
      box-shadow: 0 0 0 2px transparent;
      caret-color: ${MI6_COLORS.error[500]};
    }
  `
};
