/**
 * Estilos predefinidos y esquemas de color para el componente Badge.
 *
 * Este archivo define los objetos de estilos por defecto para los diferentes tamaños de badge (`root`, `sm`, `lg`, `xl`),
 * la variante dot, y los esquemas de color para los temas claro y oscuro.
 *
 * @remarks
 * - El objeto `root` contiene los estilos base para el badge.
 * - Los objetos `sm`, `lg` y `xl` proporcionan sobreescrituras específicas de tamaño.
 * - El objeto `dot` define el tamaño para la variante dot del badge.
 * - El objeto `colorScheme` incluye definiciones de color para los temas claro y oscuro.
 *
 * @todo Revisar el uso y la definición de la variante `dot`.
 *
 * @module ToggleSwitchPresets
 */
/*

*/
 
export default {
         
    colorScheme:{
        light:{
                 
                 
            }
                
    },
    css: ({ dt }: { dt: (token: string) => string | number | undefined }) => {
        return `

        :root {
            --mi6-focus-shadow: ${dt('focusRing.shadow')};
            --p-toggleswitch-hover-border-color:${dt('primary.300')} ;  
            --p-toggleswitch-checked-border-color:${dt('primary.300')} ;  
            --p-toggleswitch-checked-hover-border-color: ${dt('primary.300')} ;  
            --p-toggleswitch-handle-background:  ${dt('neutralBlue.100')} ;
            --p-toggleswitch-handle-hover-background: ${dt('neutralBlue.50')} ; 
            --p-toggleswitch-handle-checked-background:  ${dt('neutralBlue.50')} ;  
            --p-toggleswitch-handle-checked-hover-background: ${dt('neutralBlue.100')} ;  
            --p-toggleswitch-background: ${dt('neutralBlue.600')} ;  
            --p-toggleswitch-hover-background: ${dt('neutralBlue.700')} ;  
            --p-toggleswitch-checked-background: ${dt('primary.300')} ; 
            --p-toggleswitch-checked-hover-background: ${dt('primary.400')} ;  
            --p-toggleswitch-disabled-background: ${dt('neutralBlue.400')} ;
            --p-toggleswitch-checked-disabled-background: ${dt('primary.200')} ; 
            --p-toggleswitch-handle-disabled-background: ${dt('neutralBlue.100')} ;

        }

        .p-toggleswitch-slider{
            width: 37px;
            border: none;
            }

        .p-toggleswitch-slider:disabled{
            width: 37px;
            border: none;
            }
            
        .p-toggleswitch-checked-slider:disabled{
            width: 37px;
            border: none;
            }

        .p-toggleswitch-handle {
            position: absolute;
            top: 12px;   
            left: 1px;
            width: 16px;
            height: 16px;
        }

        .p-toggleswitch-error   {
            display: flex;
            flex-direction: row; /* Coloca en horizontal */
            gap: 15px; /* Espacio horizontal entre elementos */
            align-items: center; /* Alinea verticalmente */
        }

        .p-toggleswitch-error p-toggleswitch:hover .p-toggleswitch-slider {
               background: ${dt('error.600')} !important;  
        }
           
        .p-toggleswitch-error p-toggleswitch .p-toggleswitch-slider {
            background:  ${dt('error.500')} !important;
            
        }

        .p-toggleswitch-error-disabled p-toggleswitch .p-toggleswitch-slider {
            background:  ${dt('error.100')} !important;
            
        }

        .p-toggleswitch-success   {
            display: flex;
            flex-direction: row; /* Coloca en horizontal */
            gap: 15px; /* Espacio horizontal entre elementos */
            align-items: center; /* Alinea verticalmente */
        }
        
        .p-toggleswitch-success p-toggleswitch  .p-toggleswitch-slider {
            background:  ${dt('success.400')} !important;
        }

        .p-toggleswitch-success p-toggleswitch:hover .p-toggleswitch-slider {
            background: ${dt('success.600')} !important;  
        }

       .p-toggleswitch-success-disable p-toggleswitch .p-toggleswitch-slider {
            background: ${dt('success.200')} !important;  
        }
           
                            
    `;
    }
              
    
};
