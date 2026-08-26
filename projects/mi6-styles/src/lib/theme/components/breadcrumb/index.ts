export default {
    item:{
        color: '{neutralBlue.900}',
        hoverColor: '{primary.400}',
        borderRadius: '0.063rem solid {primary.300}',
        icon: {
            color: '{primary.300}',
            hoverColor: '{primary.400}'
        }
    },
    separator: {
        color: '{neutralBlue.400}'
    },
    css :({ dt }: { dt: (token: string) => string | number | undefined }) => {
        return `
            /* Estilos generales para items */
            .p-breadcrumb-item-label {
                font-size: 0.75rem;
            }
                            
            .p-breadcrumb-item-icon {
                height: 1rem;
                margin: 0.125rem;                
            }
            
            /* Último item con estilo especial */
            .p-breadcrumb .p-breadcrumb-list > li:last-child .p-breadcrumb-item-link {
                display: inline-flex;         
                align-items: center;          
                color: ${dt('neutralBlue.900')};
                font-weight: bold;         
                border-bottom: 0.188rem solid ${dt('primary.300')}; 
                padding-bottom: 0.125rem;
            }
            
            /* Items deshabilitados */
            .p-breadcrumb .p-breadcrumb-item.p-disabled .p-breadcrumb-item-link,
            .p-breadcrumb .p-breadcrumb-item.p-disabled .p-breadcrumb-item-icon,
            .p-breadcrumb .p-breadcrumb-item.p-disabled .p-breadcrumb-item-label {
                color: ${dt('neutralGray.700')};
            }
        `;
        }
};
