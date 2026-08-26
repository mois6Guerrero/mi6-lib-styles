// Esquema de color LIGHT para el tema DIAN
export default {
          // se alinian los tokens en base a "dian.primitive" basandose en el standar propuesto por ngprime
          surface : { 0: '{surfaceLigth.0}', 50: '{surfaceLigth.50}', 100: '{surfaceLigth.100}', 200: '{surfaceLigth.200}', 300: '{surfaceLigth.300}', 400: '{surfaceLigth.400}', 500: '{surfaceLigth.500}', 600: '{surfaceLigth.600}', 700: '{surfaceLigth.700}', 800: '{surfaceLigth.800}', 900: '{surfaceLigth.900}' },
          content : { text: '{neutralBlue.900}', secondary: '{neutralBlue.600}', placeholder: '{neutralBlue.400}', inverted: '{contentLight.inverted}' },
          
          primary: {
                color: '{primary.500}',
                contrastColor: '#ffffff',
                hoverColor: '{primary.400}',
                activeColor: '{primary.300}'
          },

          // Resalta selección (p. ej. filas seleccionadas)
          highlight: {
            background: 'color-mix(in oklab, {primary.500}, transparent 84%)',
            focusBackground: 'color-mix(in oklab, {primary.500}, transparent 76%)',
            color: '{primary.700}',
            focusColor: '{primary.800}'
          },

          // Campos de formulario 
          formField: {
            borderRadius: '{border.radius.sm}',
            background: '{surface.0}',
            
            disabledBackground: '{surface.200}',
            filledBackground: '{surface.50}',
            filledHoverBackground: '{surface.50}',
            filledFocusBackground: '{surface.50}',
            filled: { background: '{surface.50}' },
            
            color: '{neutralBlue.900}',
            disabledColor: '{nuetralBlue.200}',
            invalidPlaceholderColor: '{error.600}',

            placeholderColor: '{neutralBlue.400}', // placeholder de thema ligth
            //borderColor: MI6_COLORS.borderLight,
            borderColor: '{neutralBlue.400}',
            hoverBorderColor: '{primary.300}',
            focusBorderColor: '{primary.300}',
            invalidBorderColor: '{error.500}',
            invalidHoverBorderColor: '{error.500}',
            invalidFocusBorderColor: '{error.500}',
            floatLabel: { background: '{surface.0}' }
          }
};

// TODO SE CONTINUA ADECUANDO SEGUN FIGMA EL DIA DE MAÑANA
