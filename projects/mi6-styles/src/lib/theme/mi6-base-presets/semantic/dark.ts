import { MI6_COLORS } from '../mi6.variables';

// Esquema de color Dark para el tema MI6
export default {
    surface: { 
    ...MI6_COLORS.surfaceDark 
    },
    content: { 
    ...MI6_COLORS.contentDark 
    },

    highlight: {
    background: 'color-mix(in oklab, {primary.400}, transparent 84%)',
    focusBackground: 'color-mix(in oklab, {primary.400}, transparent 76%)',
    color: '{primary.100}',
    focusColor: '{primary.50}'
    },

    formField: {
    borderRadius: '4px',
    
    
    background: 'red',
    disabledBackground: 'red',
    filledBackground: 'red',
    filledHoverBackground: 'red',
    filledFocusBackground: 'red',
    filled: { background: '{surface.100}' },
    color: '{surface.900}',
    placeholderColor: '{surface.600}',
    borderColor: MI6_COLORS.borderDark,
    hoverBorderColor: '{gray.400}',
    focusBorderColor: '{primary.300}',

    invalidBorderColor: '{red.400}',
    invalidHoverBorderColor: '{red.500}',
    invalidFocusBorderColor: '{red.500}',

    floatLabel: { background: '{surface.0}' }
    }
};

