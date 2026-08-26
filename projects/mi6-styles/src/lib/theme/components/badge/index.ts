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
 * @module BadgePresets
 */
/*

*/
const root = {
    borderRadius: '2rem',
    padding: '0 0.5rem',
    fontSize: '0.85rem',
    fontWeight: '700',
    minWidth: '1.5rem',
    height: '1.5rem'
};


const xl  = {
    fontSize: '1rem',
    minWidth: '2rem',
    height: '2rem'
};


const lg = {
    fontSize: '0.875rem',
    minWidth: '1.75rem',
    height: '1.75rem'
};

const sm = {
    fontSize: '0.75rem',
    minWidth: '1.25rem',
    height: '1.25rem'
};

// TODO revisar que es dot como se usa 
const dot = {
    size: '0.5rem'
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
    colorScheme,
    dot,
    sm,
    lg,
    xl
};
