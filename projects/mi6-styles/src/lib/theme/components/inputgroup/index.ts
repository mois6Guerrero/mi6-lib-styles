import { MI6_COLORS } from '../../mi6-base-presets/mi6.variables';

export default {
  addon: {
    background: MI6_COLORS.neutralBlue[100],
    borderColor: MI6_COLORS.neutralBlue[400],
    color: MI6_COLORS.neutralBlue[800],
    borderRadius: '4px',
    padding: '0.5rem 0.75rem',
    minWidth: '2.5rem'
  },
  extend: {},
  css: `
      .p-inputgroupaddon {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        font-size: 0.875rem;
        transition: all 0.2s ease;
      }

      .p-inputgroupaddon:hover {
        border-color: ${MI6_COLORS.primary[300]};
        background-color: ${MI6_COLORS.neutralBlue[200]};
      }

      .p-inputgroup:hover .p-inputgroupaddon {
        background-color: ${MI6_COLORS.primary[50]};
        border-color: ${MI6_COLORS.primary[300]};
      }

      .p-inputgroup:hover .p-inputtext {
        border-color: ${MI6_COLORS.primary[300]};
        background-color: ${MI6_COLORS.neutralBlue[50]};
      }

      .p-inputgroupaddon:focus-within {
        border-color: ${MI6_COLORS.primary[400]};
        background-color: ${MI6_COLORS.generico.white};
      }

      .p-inputgroup:has(.p-inputtext:disabled) .p-inputgroupaddon {
        border-color: ${MI6_COLORS.neutralBlue[300]} !important;
        background-color: ${MI6_COLORS.neutralBlue[200]} !important;
        color: ${MI6_COLORS.neutralGray[700]} !important;
        cursor: not-allowed;
        opacity: 0.6;
      }

      .p-inputgroup:has(.p-inputtext:disabled):hover .p-inputgroupaddon {
        border-color: ${MI6_COLORS.neutralBlue[300]} !important;
        background-color: ${MI6_COLORS.neutralBlue[200]} !important;
      }

      .p-inputgroup:has(.p-inputtext:hover) .p-inputgroupaddon {
        border-color: ${MI6_COLORS.primary[400]};
        box-shadow: 0 0 0 0px ${MI6_COLORS.primary[100]};
      }

      .p-inputgroup:hover .p-inputgroupaddon {
        transition: all 0.2s ease;
      }

      .p-inputgroup:has(.p-inputtext:disabled) .p-inputtext {
        cursor: not-allowed;
        opacity: 0.6;
        pointer-events: none;
        border-color: ${MI6_COLORS.neutralBlue[300]} !important;
        background-color: ${MI6_COLORS.neutralBlue[200]} !important;
        color: ${MI6_COLORS.neutralGray[700]} !important;
      }

      /* ESTADO FOCUS */
      .p-inputgroup:has(.p-inputtext:focus) .p-inputgroupaddon {
        border-color: ${MI6_COLORS.primary[500]};
        background-color: ${MI6_COLORS.primary[50]};
        box-shadow: 0 0 0 1px ${MI6_COLORS.primary[100]};
        transition: all 0.2s ease;
      }

      .p-inputgroup .p-inputtext:focus {
        border-color: ${MI6_COLORS.primary[500]};
        box-shadow: 0 0 0 1px ${MI6_COLORS.primary[100]};
      }

      /* ERROR EXPLÍCITO */
      .p-inputgroup.input-error .p-inputtext {
        border-color: ${MI6_COLORS.error[500]} !important;
        box-shadow: 0 0 0 0px ${MI6_COLORS.error[300]};
      }

      .p-inputgroup.input-error .p-inputgroupaddon {
        background-color: ${MI6_COLORS.error[50]} !important;
        border-color: ${MI6_COLORS.error[500]} !important;
        color: ${MI6_COLORS.error[700]} !important;
      }

      /* 🔴 ERROR AUTOMÁTICO BASADO EN .p-invalid */
      .p-inputgroup:has(.p-inputtext.p-invalid) .p-inputgroupaddon {
        border-color: ${MI6_COLORS.error[500]};
        background-color: ${MI6_COLORS.error[50]};
        box-shadow: 0 0 0 0 ${MI6_COLORS.error[300]};
        transition: all 0.2s ease;
      }

      .p-inputgroup:has(.p-inputtext.p-invalid:focus) .p-inputgroupaddon {
        border-color: ${MI6_COLORS.error[500]};
        background-color: ${MI6_COLORS.error[50]};
        box-shadow: 0 0 0 0 ${MI6_COLORS.error[300]};
        transition: all 0.2s ease;
      }

      .p-inputgroup .p-inputtext.p-invalid {
        border-color: ${MI6_COLORS.error[500]} !important;
        box-shadow: 0 0 0 0 ${MI6_COLORS.error[300]};
      }

      /* TEXTAREA - mantiene coherencia */
      .p-inputgroup:has(.p-textarea.p-invalid) .p-inputgroupaddon {
        border-color: ${MI6_COLORS.error[500]};
        background-color: ${MI6_COLORS.error[50]};
        box-shadow: 0 0 0 0 ${MI6_COLORS.error[300]};
        transition: all 0.2s ease;
      }

      .p-inputgroup:has(.p-textarea.p-invalid:focus) .p-inputgroupaddon {
        border-color: ${MI6_COLORS.error[500]};
        background-color: ${MI6_COLORS.error[50]};
        box-shadow: 0 0 0 0 ${MI6_COLORS.error[300]};
        transition: all 0.2s ease;
      }

      .error-message {
        color: ${MI6_COLORS.error[500]};
        font-size: 0.875rem;
        margin-top: 0.25rem;
      }
  `
};
