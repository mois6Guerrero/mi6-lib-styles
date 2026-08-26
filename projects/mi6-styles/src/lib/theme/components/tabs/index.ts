/**
 * Estilos predefinidos y esquemas de color para el componente Tab.
 *
 * Este archivo define los objetos de estilos por defecto para el componente tab según lineamientos MI6 figma,
 * la variante dot, y los esquemas de color para los temas claro y oscuro.
 *
 * @remarks
 * - El objeto `root` contiene los estilos base para el tab.
 * - Los objetos `sm`, `lg` y `xl` proporcionan sobreescrituras específicas de tamaño.
 * - El objeto `dot` define el tamaño para la variante dot del badge.
 * - El objeto `colorScheme` incluye definiciones de color para los temas claro y oscuro.
 *
 * @todo Revisar el uso y la definición de la variante `dot`.
 *
 * @module TabPresets
 */


import type { TabsDesignTokens, TabsTokenSections } from '@primeuix/themes/types/tabs';


const tablist:TabsTokenSections.Tablist = {
    borderWidth: '0px 0px 2px 0px',
    background: '{primary.50}',
    borderColor: '{neutralBlue.300}'

};

const tab  = {
    background: 'transparent',
    hoverBackground: '{primary.100}',
    activeBackground: '{generico.white}',
    borderWidth: '0px 0px 0px 0px',
    activeBorderWidth: '0px 0px 0px 2px',
    borderColor: '{neutralBlue.300}',
    hoverBorderColor: '{neutralBlue.300}',
    activeBorderColor: '{primary.300}',
    color: '{secondary.900}',
    hoverColor: '{secondary.900}',
    activeColor: '{secondary.900}',
    padding: '10px 8px',
    fontWeight: '600',
    margin: '0 0 -1px 0',
    gap: '0.5rem',
    focusRing: {
        width: '0',
        style: 'none',
        color: 'unset',
        offset: '0',
        shadow: 'none'
    }
};

const activeBar  = {
    height: '2px',
    background: '{primary.300}'
};

export const tabpanel = {
    background: '{generic.white}',
    color: '{content.color}',
    padding: '1.25rem 1.25rem 1.25rem 1.25rem',
    focusRing: {
        width: '0',
        style: 'none',
        color: 'unset',
        offset: '0',
        shadow: 'none'
    }
};


// const colorScheme = {
//     light
// };

const css = /*css*/ `


.p-tabs .p-tablist{
    font-size: 0.875rem;
    
}



.p-tablist-content{
    display: flex;
    flex-grow: 1;

}
.p-tablist-tab-list{
    flex: 1 0 0;
    display: flex;
    flex-grow: 1;
    gap: 0px;
    .p-tab{
        flex-grow: 1;
        text-align: center;
        gap: 8px;
        display: flex;
        justify-content: center;
    }
}
.p-tabs-scrollable .p-tab {
    flex-grow: 0
}

.p-tab-active {
    background: dt('generico.white');
    border-width: 0px 0px 0px 0px;
    border-color: dt('generico.white');
}

.p-tab:not(.p-disabled):focus-visible {
    background: dt('navigation.item.active.background');
}

.p-tablist-nav-button:focus-visible {
    background: dt('navigation.item.active.background');
}

/* barra superior desplazable */

.p-tablist-active-bar{
    inset-block-end: unset;
}

.p-tablist-tab-list {
    border-bottom: solid 2px dt('neutralBlue.300');
}
.p-tablist-tab-list .p-tab {
    border-bottom: solid 2px dt('neutralBlue.300');
    margin-bottom: -2px;
}
.p-tab:hover, .p-ripple:hover {
    background: dt('primary.100');
}


.p-tab:hover.p-tab-active, .p-ripple:hover.p-tab-active {
    background: dt('generico.white');
}

.p-tablist-tab-list .p-tab.p-tab-active {
    border-bottom: solid 2px dt('generico.white');
}

/* Estilos personalizados para */

.d-tablet {
    .p-tablist-active-bar{
        height: 0px;
    }
    .p-tablist-tab-list{
        height: 40px;
        gap: 6px;
        border: unset;
        background-color: unset;
        .p-tab{
            background-color: dt('primary.50');
            border: 1px solid dt('neutralBlue.400');
            border-radius: 6px;
            margin-bottom: 0px;
            display: flex;
            align-items: center;
            justify-content: center;

        }
        .p-tab.p-tab-active{
            background-color: dt('generico.white');
            border: 1px solid dt('primary.300');
            border-radius: 6px;
            margin-bottom: 0px;
        }    

    }
}

/* Inhablitar control */
.p-tab.p-disabled, .p-component:disabled
    {   
        opacity: unset !important;
        border: 1px solid dt('neutralBlue.300') !important;
        background-color: dt('neutralBlue.200') !important;
        color: dt('neutralGray.700') !important;
    }

.d-tablet .p-disabled, .d-tablet .p-component:disabled
    {
        opacity: unset !important;
        border: 1px solid dt('neutralBlue.300') !important;
        background-color: dt('neutralBlue.200') !important;
        color: dt('neutralGray.700') !important;
    }

/* clase small */
.d-small{
    .p-tablist-tab-list{
        height: 32px;
        
        .p-tab{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0px 8px;
            font-size: 12px;
            gap: 8px;
            flex-shrink: 0;
            line-height: 14px; 
        }

    }
}

`


;
export default {
    tablist,
    tab,
    tabpanel,
    css,
    activeBar
    
} satisfies TabsDesignTokens;
