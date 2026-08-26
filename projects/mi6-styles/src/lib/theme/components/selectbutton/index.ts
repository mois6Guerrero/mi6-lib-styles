/**
 * Estilos predefinidos y esquemas de color para el componente SelectButton.
 *
 * Este archivo define los objetos de estilos por defecto para los diferentes tamaños (`root`, `sm`, `lg`, `xl`),
 * la variante dot, y los esquemas de color para los temas claro y oscuro.
 *
 * @remarks
 * - El objeto `root` contiene los estilos base para el Tag.
 * - El objeto `icon` contiene los estilos base para el icon tag.
 * - El objeto `colorScheme` incluye definiciones de color para los temas claro y oscuro.
 *
 * @todo Revisar el uso y la definición de la variante `dot`.
 *
 * @module SelectButtonModule
 */


export default {
         
    colorScheme:{
        light:{
                 
                 
            }
                
    },
    css: ({ dt }: { dt: (token: string) => string | number | undefined }) => {
        return `

        :root {
            --p-togglebutton-disabled-border-color: ${dt('neutralBlue.300')} !important;
            --p-togglebutton-disabled-background: ${dt('generico.white')} !important;
            
        }

        .p-selectbutton {
            display: inline-flex;
            user-select: none;
            vertical-align: bottom;
            border-color: ${dt('primary.200')}  !important;
            borderRadius: '{border.radius.md}' !important;
            
        }

        .p-selectbutton.p-togglebutton {
            background:   ${dt('neutralGray.50')} !important;
            border-color: ${dt('primary.200')} !important;
            color: ${dt('neutralGray.900')}  !important;
        }

        .p-selectbutton.p-togglebutton:disabled {
            background:   ${dt('generic.white')} !important;
            border-color: ${dt('neutralBlue.300')} !important;
            color: ${dt('neutralGray.900')}  !important;
        }

        .p-selectbutton.p-togglebutton-checked {
            background:  ${dt('primary.50')}  !important;
            border-color: ${dt('primary.300')}  !important;
            color: ${dt('neutralGray.900')}  !important;
        }

              

        .p-togglebutton-checked {
            background:  ${dt('primary.200')} !important;
            border-color: var(--p-togglebutton-checked-border-color) !important;
            color: ${dt('neutralGray.900')} !important;
        }

        .p-selectbutton-custom-primary {
            color: ${dt('neutralGray.900')} !important;
            border-color: ${dt('primary.500')} !important;
            background:  ${dt('primary.400')} !important;
        }

        .p-selectbutton-custom-primary.p-togglebutton-checked {
            background:  ${dt('primary.200')} !important;
            border-color: ${dt('primary.300')} !important;
            color: ${dt('neutralGray.900')} !important;
        }

          
                    
    `;
    }
              
    
};
