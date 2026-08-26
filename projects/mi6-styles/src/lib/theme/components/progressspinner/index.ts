import { MI6_COLORS } from '../../mi6-base-presets/mi6.variables';
/**
 * Importamos las definiciones de tokens y propiedades del componente ProgressBar.
 * En `@primeuix/themes/types/progressspinner` se encuentra la especificación oficial de los design tokens (`ProgressSpinnerTokenSections`) que describen las secciones disponibles y sus propiedades configurables.
 * Ver más en: import { ProgressSpinnerTokenSections } from '@primeuix/themes/types/progressspinner';
 */
export default {
  root: {
    colorOne: `${MI6_COLORS.primary[300]} !important`,
    colorTwo: `${MI6_COLORS.primary[300]} !important`,
    colorThree: `${MI6_COLORS.primary[300]} !important`,
    colorFour: `${MI6_COLORS.primary[300]} !important`
  },
  extend: {},
  css: `
  .p-progressspinner {
    width: 48px;
    height: 48px;
  }
  .p-progressspinner svg circle {
    stroke-width: 4px;
    stroke-linecap: butt;
    stroke: ${MI6_COLORS.primary[300]} !important;
  }
  .p-progressspinner-spin{
    animation-duration: 4s !important;
  }

  @media (min-width: 1200px) { /* xlarge */
    .p-progressspinner {
      width: 80px;
      height: 80px;
    }
  }

  @media (min-width: 992px) and (max-width: 1199px) { /* large */
    .p-progressspinner {
      width: 64px;
      height: 64px;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) { /* medium */
    .p-progressspinner {
      width: 56px;
      height: 56px;
    }
  }

  @media (max-width: 767px) { /* regular */
    .p-progressspinner {
      width: 48px;
      height: 48px;
    }
  }
  `
};
