/**
 * Estilos predefinidos y esquemas de color para el componente Badge.
 *
 * Este archivo define los objetos de estilos por defecto para los diferentes tamaños de badge (`root`, `sm`, `lg`, `xl`),
 * la variante dot, y los esquemas de color para los temas claro y oscuro.
 *
 * @remarks
 * - El objeto `root` contiene los estilos base para el Tag.
 * - El objeto `icon` contiene los estilos base para el icon tag.
 * - El objeto `colorScheme` incluye definiciones de color para los temas claro y oscuro.
 *
 * @todo Revisar el uso y la definición de la variante `dot`.
 *
 * @module TagModule
 */


const root = {
    fontSize: '0.875rem',
    fontWeight: '700',
    padding: '0.25rem 0.5rem',
    heigth:'1rem',
    gap: '0.25rem',
    borderRadius: '{borderRadius.sm}',
    roundedBorderRadius: '1.5rem'
};

const icon = {
    size: '1rem'
};


const light = {
    primary:{
        background:'{secondary.900}',
        color : '{generico.white}'
    },
    success: {
        background: '{success.400}',
        color: '{secondary.900}'
    },
    info: {
        background: '{tertiary.300}',
        color: '{secondary.900}'
    },
    warn: {
        background: '{atention.400}',
        color: '{secondary.900}'
    },
    danger: {
        background: '{error.300}',
        color: '{secondary.900}'
    },
    secondary: {
        background: '{secondary.100}',
        color: '{secondary.900}'
    }
};


const colorScheme = {
    light
};



export default {
    root,
    icon,
    colorScheme,
    css: ()=>{
        return `
            
            /* bases */
            .p-tag {
                height: 1.625rem;
            }

            p-tag.tag-large {
                height: 1.875rem;
                padding: 0.375rem 0.75rem;
                gap: 8px;
            }
            p-tag.tag-small {
                height: 20px;
                padding: 0.125rem 0.375rem;
                gap: 4px;
                font-size: 0.75rem;
            }

            p-tag.tag-small > span.p-tag-icon{
                font-size: 0.875rem;
                width: 0.875rem;
                height: 0.875rem;
            }
            
            p-tag.inverse{
                 flex-direction: row-reverse;
            }
            
        `;
    }
    
    
};
