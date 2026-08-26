const COLORSCHEMA = {
    info: {
        background: '{tertiary.50}',
        borderColor: '{tertiary.200}',
        color: '{secondary.900}',
        shadow: 'none',
        closeButton: {
            hoverBackground: '{tertiary.100}',
            focusRing: {
                color: '{tertiary.200}',
                shadow: 'none'
            }
        },
        outlined: {
            color: '{secondary.900}',
            borderColor: '{tertiary.200}'
        }
    },
    success: {
        background: '{success.100}',
        borderColor: '{success.300}',
        color: '{secondary.900}',
        shadow: 'none',
        closeButton: {
            hoverBackground: '{success.200}',
            focusRing: {
                color: '{success.300}',
                shadow: 'none'
            }
        },
        outlined: {
            color: '{secondary.900}',
            borderColor: '{success.300}'
        }
    },
    warn: {
        background: '{atention.50}',
        borderColor: '{atention.300}',
        color: '{secondary.900}',
        shadow: 'none',
        closeButton: {
            hoverBackground: '{atention.100}',
            focusRing: {
                color: '{atention.300}',
                shadow: 'none'
            }
        },
        outlined: {
            color: '{secondary.900}',
            borderColor: '{atention.300}'
        }
    },
    error: {
        background: '{error.50}',
        borderColor: '{error.300}',
        color: '{secondary.900}',
        shadow: 'none',
        closeButton: {
            hoverBackground: '{error.100}',
            focusRing: {
                color: '{error.300}',
                shadow: 'none'
            }
        },
        outlined: {
            color: '{secondary.900}',
            borderColor: '{error.300}'
        }
    },
    secondary: {
        background: '{surface.100}',
        borderColor: '{surface.200}',
        color: '{surface.600}',
        shadow: 'none',
        closeButton: {
            hoverBackground: '{surface.50}',
            focusRing: {
                color: '{generico.white}',
                shadow: 'none'
            }
        },
        outlined: {
            color: '{secondary.900}',
            borderColor: '{surface.600}'
        }
    },
    contrast: {
        background: '{secondary.900}',
        borderColor: '{secondary.950}',
        color: '{generico.white}',
        shadow: 'none',
        closeButton: {
            hoverBackground: '{surface.800}',
            focusRing: {
                color: '{surface.50}',
                shadow: 'none'
            }
        },
        outlined: {
            color: '{secondary.900}',
            borderColor: '{secondary.950}'
        }
    }
};

export default {
    root: {
        borderRadius: '0.25rem',
        borderWidth: '0.063rem'
    },
    content: {
        padding: '0.5rem',
        gap: '0.5rem',
        sm: {
            padding: '0.375rem'
        },
        lg: {
            padding: '0.625rem'
        }
    },
    text: {
        fontSize: '0.75rem',
        fontWeight: '400',
        sm: {
            fontSize: '0.625rem'
        },
        lg: {
            fontSize: '0.875rem'
        }
    },
    icon: {
        size: '1.25rem',
        sm: {
            size: '1rem'
        },
        lg: {
            size: '1.5rem'
        }
    },
    closeButton: {
        width: '1.5rem',
        height: '1.5rem',
        borderRadius: '1.5rem',
        hoverBackground: 'none'
    },
    closeIcon: {
        size: '1.25rem',
        sm: {
            size: '1rem'
        },
        lg: {
            size: '1.5rem'
        }
    },
    outlined: {
        root: {
            borderWidth: '0.063rem'
        }
    },
    simple: {
        content: {
            padding: '0'
        }
    },
    colorScheme: {
        light: COLORSCHEMA,
        dark: COLORSCHEMA
    }
};
