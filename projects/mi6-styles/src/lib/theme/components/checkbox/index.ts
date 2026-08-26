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
 * @module CheckboxPresets
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
            --mi6-button-radius: 4px;
            --p-checkbox-disabled-border:  ${dt('neutralBlue.300')} ; 
            --p-checkbox-checked-disabled-border-color:  ${dt('neutralBlue.500')} ; 
            --p-checkbox-checked-background:  ${dt('primary.300')} ; 
            --p-checkbox-checked-hover-background: ${dt('primary.400')} ; 
            --p-checkbox-icon-size: 0.6rem;
            --p-checkbox-icon-sm-size: 0.53rem;
            --p-checkbox-icon-lg-size: 0.83rem;
        }

        .p-checkbox-circle   {
            
            display: flex;
            flex-direction: row; /* Coloca en horizontal */
            gap: 15px; /* Espacio horizontal entre elementos */
            align-items: center; /* Alinea verticalmente */
            
        }

      
        .p-checkbox-circle .p-checkbox .p-checkbox-box {
            border-radius: 50% ;
            border-color: ${dt('neutralBlue.500')} ;
            width: 17px ;
            height: 17px ;
            padding-left: 1px;
             
        }

        .p-checkbox-circle .p-checkbox-sm .p-checkbox-box {
            border-radius: 50% ;
            border-color: ${dt('neutralBlue.500')} ;
            width: 13px ;
            height: 13px ;
        }

        .p-checkbox-circle .p-checkbox-lg .p-checkbox-box {
            border-radius: 50% ;
            border-color: ${dt('neutralBlue.500')} ;
            width: 24px ;
            height: 22px ;
            padding-left: 2px;
        }
                                    
    `;
    }
              
    
};
