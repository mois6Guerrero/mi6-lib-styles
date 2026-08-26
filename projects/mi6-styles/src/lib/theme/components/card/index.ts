import type {
  CardDesignTokens,
  CardTokenSections
} from '@primeuix/themes/types/card';

export const root: CardTokenSections.Root = {
  background: '{generico.white}',
  borderRadius: '0.25rem',
  color: '{neutralBlue.900}',
  shadow: '0 2px 6px 0 rgba(16, 24, 40, 0.06)'
};

export const body: CardTokenSections.Body = {
  padding: '1.5rem',
  gap: '0.75rem'
};

export const caption: CardTokenSections.Caption = {
  gap: '0.5rem'
};

export const title: CardTokenSections.Title = {
  fontSize: '1rem',
  fontWeight: '700'
};

export const subtitle: CardTokenSections.Subtitle = {
  color: '{neutralblue.900}'
};

export const css: CardTokenSections.CSS = /*css*/ `
    .p-card-content{
        font-size: 0.875rem;
    }

    .p-card-content, .p-card-subtitle{
        font-size: 0.875rem;
    }


    .d-custom-card{
        width: 370px;
        min-height: 268px;
    }
    @media (max-width: 576px) {
        .d-custom-card {
            width: 100%;
            min-height: 268px;
        }
    }
    .d-custom-card > .p-card-body{
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        min-height: 268px;
    }
    .d-card-icon{
        width: 51.2px;
        height: 64px;
        color: dt('tertiary.500');
    }
    
    .d-card-icon * {
            stroke-width: 3.5px;    
            shape-rendering: geometricPrecision;
            vector-effect: non-scaling-stroke;
     }

    
     .d-custom-card .p-card-body > .p-card-footer{
        display: flex;
        padding: 8px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 4px;
        align-self: stretch;
        border-radius: 4px;
        border: 1px solid dt('atention.300');
        background: dt('atention.50');
        margin-top: auto;
        flex-shrink: 0;
    }
    

    .d-custom-card  .p-card-body .p-card-footer > div:first-child{
        display: flex;
        align-items: center;
        gap: 4px;
        align-self: stretch;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
    }

    .d-custom-card  .p-card-body .p-card-footer > div:last-child{
        color: dt(secondary.900);
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px; 
    }

    /* contenido de la tarjeta customisado para el documento de figma*/
    .d-custom-card  .p-card-body .p-card-content {
        display: flex;
        flex-direction: row;
        gap: 16px;
        align-items: flex-start;
        flex-grow: 1;
        

    }
    
    .d-custom-card  .p-card-body .p-card-content > span{
        flex:0;
        height: 100%;
    }
    
    .d-custom-card  .p-card-body .p-card-content > div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        flex: 1 0 0;
        color: dt('neutraBlue.900');
    }


    .d-custom-card  .p-card-body .p-card-content > div :first-child{
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px; /* 125% */
    }

    .d-custom-card  .p-card-body .p-card-content > div :last-child{ 
        color: dt('neutralBlue.900');
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; 
    }

    .d-button-states{
        transition: background-color 0.3s ease;
        cursor:pointer;
    }

    .d-button-states:hover{
        background-color: dt('neutralGray.50');
        transition: background-color 0.3s ease;
        cursor:pointer;
    }
    
    .d-disabled-card{
        border: 1px solid dt('neutralBlue.300');
        background-color: dt('neutralBlue.200');
        cursor: not-allowed !important;
        pointer-events: none !important;
    }  
    .d-disabled-card .p-card-body .p-card-content *{
        color: dt('neutralGray.700');
    }
    .d-disabled-card .p-card-body .p-card-content svg{
        color: dt('secondary.500');
    }
`;

export default {
  root,
  body,
  caption,
  title,
  subtitle,
  css
} satisfies CardDesignTokens;
