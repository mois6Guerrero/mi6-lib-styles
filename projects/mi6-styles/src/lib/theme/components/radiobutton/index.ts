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
            --p-radiobutton-icon-checked-color: ${dt('primary.300')} ;  
            --p-radiobutton-icon-checked-disabled-color: ${dt('neutralGray.200')} ;  
            --p-radiobutton-icon-checked-hover-color:  ${dt('primary.400')} ;  
            --p-checkbox-background:  ${dt('generico.white')} ;  
            --p-radiobutton-border-color:   ${dt('primary.300')} ;  
            --p-radiobutton-checked-border-color: ${dt('primary.300')} ;  
            --p-radiobutton-disabled-border-color: ${dt('neutralGray.300')} ;  
            --p-radiobutton-checked-disabled-border-color: ${dt('neutralGray.300')} ;  
            --p-radiobutton-icon-disabled-color:  ${dt('primary.300')} ;  
            --p-radiobutton-checked-hover-border-color: ${dt('primary.400')} ;  
            --p-radiobutton-hover-border-color: ${dt('primary.500')} ;  
        }

                            
    `;
    }
              
    
};
