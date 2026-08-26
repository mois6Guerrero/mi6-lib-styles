import { MI6_COLORS } from '../../mi6-base-presets/mi6.variables';
/**
 * Importamos las definiciones de tokens y propiedades del componente InputNumber.
 * En `@primeuix/themes/types/inputnumber` se encuentra la especificación oficial de los design tokens.
 */

export default {
  root: {
    transitionDuration: '200ms',
    background: MI6_COLORS.generico.white,
    disabledBackground: MI6_COLORS.neutralBlue[200],
    borderColor: MI6_COLORS.neutralBlue[400],
    hoverBorderColor: MI6_COLORS.primary[300],
    focusBorderColor: MI6_COLORS.primary[400],
    invalidBorderColor: MI6_COLORS.error[500],
    color: MI6_COLORS.neutralBlue[800],
    disabledColor: MI6_COLORS.neutralGray[600],
    placeholderColor: MI6_COLORS.neutralBlue[400],
    invalidPlaceholderColor: MI6_COLORS.error[400],
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
    sm: {
      fontSize: '0.875rem',
      paddingX: '0.5rem',
      paddingY: '0.375rem'
    },
    lg: {
      fontSize: '1rem',
      paddingX: '1rem',
      paddingY: '0.75rem'
    }
  },
  button: {
    width: '32px',
    borderRadius: '4px',
    verticalPadding: '4px',
    background: MI6_COLORS.generico.white,
    hoverBackground: MI6_COLORS.neutralBlue[50],
    activeBackground: MI6_COLORS.neutralBlue[100],
    borderColor: MI6_COLORS.neutralBlue[400],
    hoverBorderColor: MI6_COLORS.primary[300],
    activeBorderColor: MI6_COLORS.primary[400],
    color: MI6_COLORS.neutralBlue[800],
    hoverColor: MI6_COLORS.primary[400],
    activeColor: MI6_COLORS.primary[500]
  },
  extend: {},
  css: `
    .p-inputnumber {
      caret-color: ${MI6_COLORS.primary[400]};
      transition: all 200ms ease;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    }

    .p-inputnumber:focus {
      box-shadow: 0 0 0 2px ${MI6_COLORS.primary[100]};
    }

    .p-inputnumber::selection {
      background: ${MI6_COLORS.primary[100]};
      color: ${MI6_COLORS.primary[900]};
    }

    .p-inputnumber:disabled {
      cursor: not-allowed;
      opacity: 0.7;
      border-color: ${MI6_COLORS.neutralBlue[300]} !important;
      background-color: ${MI6_COLORS.neutralBlue[200]} !important;
      color: ${MI6_COLORS.neutralGray[700]} !important;
    }

    .p-inputnumber:disabled:hover {
      border-color: ${MI6_COLORS.neutralBlue[300]} !important;
      background-color: ${MI6_COLORS.neutralBlue[200]} !important;
      color: ${MI6_COLORS.neutralGray[700]} !important;
    }

    .p-inputnumber-button {
      width: 32px;
      height: 32px;
      border-radius: 4px;
      padding: 4px 0;
      background: ${MI6_COLORS.generico.white};
      border: 1px solid ${MI6_COLORS.neutralBlue[400]};
      color: ${MI6_COLORS.neutralBlue[800]};
      cursor: pointer;
      transition: all 200ms ease;
    }

    .p-inputnumber-button:hover {
      background: ${MI6_COLORS.neutralBlue[50]};
      border-color: ${MI6_COLORS.primary[300]};
      color: ${MI6_COLORS.primary[400]};
    }

    .p-inputnumber-button:active {
      background: ${MI6_COLORS.neutralBlue[100]};
      border-color: ${MI6_COLORS.primary[400]};
      color: ${MI6_COLORS.primary[500]};
    }
  `
};
