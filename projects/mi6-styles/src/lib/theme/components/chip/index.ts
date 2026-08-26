export default {
    root: {
        background: '{secondary.700}',
        borderRadius: '0.25rem',
        gap: '0.563rem'
    },
    colorScheme: {
        light: {
            root: {
                background: '{secondary.700}',
                color: '{generico.white}'
            },
            icon: {
                color: '{generico.white}'
            },
            removeIcon: {
                color: '{generico.white}'
            }
        },
        dark: {
            root: {
                background: '{secondary.700}',
                color: '{generico.white}'
            },
            icon: {
                color: '{generico.white}'
            },
            removeIcon: {
                color: '{generico.white}'
            }
        }
    },
    css: ({ dt }: { dt: (token: string) => string | number | undefined }) => {
        return `
        .p-chip {
            box-sizing: border-box;
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            cursor: pointer;
            color: ${dt('generico.white')};
            height: 0.5rem;
        }

        .p-chip-label {
            font-weight: 700;
        }

        /* Default */
        .p-chip:hover {
            background-color: ${dt('secondary.800')};
        }
        .p-chip:active {
            background-color: ${dt('secondary.900')};
        }

         /* Tamaños */
        .p-chip.chip-large { height: 1.75rem; }    
        .p-chip.chip-medium { height: 1.5rem; }   
        .p-chip.chip-small { height: 1.25rem; }  

        .p-chip.chip-large .p-chip-label { font-size: 1.125rem; } 
        .p-chip.chip-medium .p-chip-label { font-size: 1rem; } 
        .p-chip.chip-small .p-chip-label { font-size: 0.875rem; }  

        .p-chip.chip-large .p-chip-icon { font-size: 1.125rem; } 
        .p-chip.chip-medium .p-chip-icon { font-size: 1rem; }    
        .p-chip.chip-small .p-chip-icon { font-size: 0.875rem; } 

        .p-chip.chip-large .p-chip-remove-icon { font-size: 1.125rem; }
        .p-chip.chip-medium .p-chip-remove-icon { font-size: 1rem; }
        .p-chip.chip-small .p-chip-remove-icon { font-size: 0.875rem; } 
        
        /* Neutral */
        .p-chip .p-chip-icon,
        .p-chip .p-chip-remove-icon,
        .p-chip .p-chip-label {
            color: ${dt('generico.white')};
        }
        
        /* Success, Warning, Error (etiqueta + iconos) */
        .p-chip.chip-success .p-chip-icon,
        .p-chip.chip-warning .p-chip-icon,
        .p-chip.chip-error .p-chip-icon,
        .p-chip.chip-success .p-chip-remove-icon,
        .p-chip.chip-warning .p-chip-remove-icon,
        .p-chip.chip-error .p-chip-remove-icon,
        .p-chip.chip-success .p-chip-label,
        .p-chip.chip-warning .p-chip-label,
        .p-chip.chip-error .p-chip-label {
            color: ${dt('secondary.900')};
        }

         /* Success */
        .p-chip.chip-success {
            background-color: ${dt('success.300')};
            color: ${dt('secondary.900')};
        }
        .p-chip.chip-success:hover { background-color: ${dt('success.500')}; }
        .p-chip.chip-success:active { background-color: ${dt('success.400')}; }

        /* Warning */
        .p-chip.chip-warning {
            background-color: ${dt('atention.300')};
            color: ${dt('secondary.900')};
        }
        .p-chip.chip-warning:hover { background-color: ${dt('atention.500')}; }
        .p-chip.chip-warning:active { background-color: ${dt('atention.400')}; }

        /* Error */
        .p-chip.chip-error {
            background-color: ${dt('error.300')};
            color: ${dt('secondary.900')};
        }
        .p-chip.chip-error:hover { background-color: ${dt('error.500')}; }
        .p-chip.chip-error:active { background-color: ${dt('error.400')}; }

        /* Disabled */
        .p-chip.chip-disabled {
            cursor: not-allowed;
            pointer-events: none;
            background-color: ${dt('neutralBlue.200')};
            border: 1px solid ${dt('neutralBlue.300')};
        }
        .p-chip.chip-disabled .p-chip-icon,
        .p-chip.chip-disabled .p-chip-remove-icon,
        .p-chip.chip-disabled .p-chip-label {
            color: ${dt('neutralBlue.700')};
        }
    `;
    }
};
