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
    css: ({ dt }: { dt: (token: string) => string | number | undefined }) => `

       .p-splitbutton-dropdown.p-button {
            border-start-start-radius: 0;
            border-end-start-radius: 0;
            border: 1px solid;
        }

        .p-ripple.p-splitbutton-dropdown.p-button.p-component.p-button-primary {
            border: 1px solid var(--p-button-primary-border-color);
        }

       .p-splitbutton.p-button.p-button-primary {
            background: var(--p-primary-300);
            color: var(--p-neutral-gray-900);
            border: 1px solid;
        }


      .p-tieredmenu {
        border:1px solid ${dt('primary.300')}  !important;
        
      }

      .p-tieredmenu-separator {
            border:1px solid ${dt('neutralBlue.400')}  !important;
           
        }


      .p-splitbutton-neutral {
          background:  ${dt('generico.white')} ;
          color: ${dt('neutralGray.900')} ;
          border-color: ${dt('primary.300')} ;
      }

      .p-splitbutton-neutral .p-button {
          background:  ${dt('generico.white')} ;
          color: ${dt('neutralGray.900')} ;
          border-color: ${dt('primary.300')} ;
      }

      .p-splitbutton-neutral .p-button:enabled:hover {
          background-color: #f8f9fa ;
          border-color: ${dt('primary.300')} ;
          color: ${dt('neutralGray.900')} ;
      }


      .p-splitbutton-primary {
          background:  ${dt('primary.400')} ;
          border-color: ${dt('primary.500')} ;
          color: ${dt('neutralGray.900')} ;
      }

      .p-splitbutton-primary .p-button {
          background:  ${dt('primary.400')} ;
          color: ${dt('neutralGray.900')} ;
          border-color: ${dt('primary.500')} ;
      }

      .p-splitbutton-primary .p-button:enabled:hover {
          background:  ${dt('primary.300')} ;
          border-color: ${dt('primary.400')} ;
          color: ${dt('neutralGray.900')} ;
      }


      
 

      `
};

 
