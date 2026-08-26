import { MI6_COLORS } from '../../mi6-base-presets/mi6.variables';
export default {
  'root': {
    'transitionDuration': '200ms'
  },
  'panel': {
    'borderWidth': '1px',
    'borderColor': MI6_COLORS.neutralBlue[300]
  },
  'header': {
    'background': MI6_COLORS.surfaceLight[0],
    'hoverBackground': MI6_COLORS.surfaceLight[0],
    'activeBackground': MI6_COLORS.surfaceLight[0],
    'color': MI6_COLORS.secondary[300],
    'hoverColor': MI6_COLORS.secondary[300],
    'activeColor': MI6_COLORS.secondary[300],
    'activeHoverBackground': MI6_COLORS.surfaceLight[0],
    'activeHoverColor': MI6_COLORS.secondary[300],
    'padding': '16px 16px 8px 16px',
    'fontWeight': '700',
    'borderRadius': '6px',
    'borderWidth': '1px',
    'borderColor': 'transparent',
    'toggleIcon': {
      'color': MI6_COLORS.primary[300],
      'activeColor': MI6_COLORS.primary[300],
      'activeHoverColor': MI6_COLORS.primary[300],
      'hoverColor': MI6_COLORS.primary[300]
    },
    'first': {
      'borderWidth': '1px',
      'topBorderRadius': '8px'
    },
    'last': {
      'activeBottomBorderRadius': '0px',
      'bottomBorderRadius': '0px'
    },
    'focusRing': {
      'width': '3px',
      'style': 'solid',
      'color': MI6_COLORS.surfaceLight[0],
      'offset': '2px',
      'shadow': '0 0 0 3px rgba(0,122,217,0.12)'
    }
  },
  'content': {
    'background': MI6_COLORS.surfaceLight[0],
    'color': MI6_COLORS.neutralGray[900],
    'padding': '8px 16px 16px 16px',
    'borderWidth': '0px',
    'borderColor': MI6_COLORS.surfaceLight[0]
  }
};
