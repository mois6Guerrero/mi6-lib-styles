
import { MI6_COLORS } from './mi6.variables';
// Primitive tokens: reasignamos familias de color
const primitive = {
    borderRadius: {
        none: '0',
        xs: '2px',
        sm: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px'
    },
    indigo: MI6_COLORS.primary,
    // Severities y neutros para que TODOS los componentes sigan estas escalas
    blue: MI6_COLORS.secondary,
    green: MI6_COLORS.primary,
    orange: MI6_COLORS.atention,
    red: MI6_COLORS.error, 
    gray: MI6_COLORS.neutralGray, 
    slate: MI6_COLORS.neutralBlue,
    
    // custom primary tokens Dian 
    // esta sección es la que se debe usar para definir el thema ligth y sus componentes
    
    primary: MI6_COLORS.primary,
    secondary: MI6_COLORS.secondary,
    tertiary: MI6_COLORS.tertiary,
    neutralBlue: MI6_COLORS.neutralBlue,
    neutralGray: MI6_COLORS.neutralGray,
    generico: MI6_COLORS.generico,
    success: MI6_COLORS.success,
    atention: MI6_COLORS.atention,
    error: MI6_COLORS.error,

    // fin definicion de tokens para thema ligth
    // Otros colores
    surfaceLigth: MI6_COLORS.surfaceLight,
    surfaceDark: MI6_COLORS.surfaceDark,
    contentLight: MI6_COLORS.contentLight,
    contentDark: MI6_COLORS.contentDark,
    borderLight: MI6_COLORS.borderLight,
    borderDark: MI6_COLORS.borderDark
    

};

export default primitive;


// nota según revisión de figma, el tono verde es mas común
// se debe consultar con UX si se mantiene el tono azul de primary o se cambia a green succes como primario.
