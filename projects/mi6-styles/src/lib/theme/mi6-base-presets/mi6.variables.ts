// Paletas DIAN centralizadas (primary / secondary / info / success / warning / error / neutralBlue / neutralGray)
// todo en base a figma

export const MI6_COLORS = {
  // colores base thema ligth 
  // en el momento solo estan difinidos los colores base para thema ligth por favor 
  // usar los valores de tokens en dian.primitive.ts para definir los componentes
  primary: {
    50: '#E2F8EB',
    100: '#BEECD0',
    200: '#95DFB4',
    300: '#41D78C',
    400: '#00CD72',
    500: '#00C25A',
    600: '#00B250',
    700: '#009F43',
    800: '#008D38',
    900: '#006D23'
  },
  secondary: {
    50: '#EFECFF',
    100: '#D1D5EF',
    200: '#B7B9D7',
    300: '#9B9DBF',
    400: '#8688AD',
    500: '#71749B',
    600: '#62668A',
    700: '#505373',
    800: '#3F415D',
    900: '#2B2D45'
  },
  tertiary: {
    50: '#e1f6fc',
    100: '#b5e9f7',
    200: '#86dbf1',
    300: '#5bcbe8',
    400: '#42c1e1',
    500: '#39B7D9',
    600: '#33a7c6',
    700: '#2c92ab',
    800: '#267e92',
    900: '#1b5c66'
  },
  neutralBlue: {
    50: '#FAFAFA',
    100: '#F6F7F9',
    200: '#F0F2F6',
    300: '#DCE2E8',
    400: '#BEC8D2',
    500: '#A3B1C0',
    600: '#6b7e8f',
    700: '#5a6978',
    800: '#4B5661',
    900: '#384149'
  },
  neutralGray: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121'
  },
  
  success: {
    50: '#F0FDF4',
    100: '#DCFCE7',
    200: '#BBF7D0',
    300: '#86EFAC',
    400: '#4ADE80',
    500: '#22C55E',
    600: '#16A34A',
    700: '#15803D',
    800: '#166534',
    900: '#14532D'
  },
  atention: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F59E0B',
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F'
  },
  error: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EC130F', 
    600: '#B50801', 
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D'
  },
  generico: {
    white: '#FFFFFF',
    black: '#000000'
  },

  // fin tonos thema ligth
 
  // colores base por confirmar en general tratar de no usar hasta confirmarlos y guiarse por 
  // documento figma con sus valores para cada componente, por ahora seran usados para definir semantica
  // de thema dark

  surfaceLight: {
    0: '#ffffff',
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121'
  },

  // Superficies (dark)
  surfaceDark: {
    0: '#121212',
    50: '#1e1e1e',
    100: '#2c2c2c',
    200: '#3c3c3c',
    300: '#4c4c4c',
    400: '#5c5c5c',
    500: '#6c6c6c',
    600: '#7c7c7c',
    700: '#8c8c8c',
    800: '#9c9c9c',
    900: '#acacac'
  },

  // Contenido (light)
  contentLight: {
    text: '#212121',
    secondary: '#757575',
    placeholder: '#bdbdbd',
    inverted: '#ffffff'
  },

  // Contenido (dark)
  contentDark: {
    text: '#ffffff',
    secondary: '#b0b0b0',
    placeholder: '#666666',
    inverted: '#000000'
  },

  // Bordes (light / dark)
  borderLight: '#e0e0e0',
  borderDark: '#3c3c3c'

};
