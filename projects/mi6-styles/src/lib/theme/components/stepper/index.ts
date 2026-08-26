import type { StepperDesignTokens, StepperTokenSections } from '@primeuix/themes/types/stepper';

export const root: StepperTokenSections.Root = {
    transitionDuration: '{transition.duration}'
};

export const separator: StepperTokenSections.Separator = {
    background: '{neutralBlue.400}',
    activeBackground: '{primary.300}',
    margin: '0 0 0 1.625rem',
    size: '2px'
};

export const step: StepperTokenSections.Step = {
    padding: '0.5rem',
    gap: '1rem'
};

export const stepHeader: StepperTokenSections.StepHeader = {
    padding: '0.75rem 1rem',
    borderRadius: '{content.border.radius}',
    focusRing: {
        width: '0',
        style: 'none',
        color: 'unset',
        offset: '0',
        shadow: 'none'
    },
    gap: '0.5rem'
};

export const stepTitle: StepperTokenSections.StepTitle = {
    color: '{text.muted.color}',
    activeColor: '{text.color}',
    fontWeight: '500'
};

export const stepNumber: StepperTokenSections.StepNumber = {
    activeBackground: '{primary.300}',
    activeBorderColor: '{primary.300}',
    activeColor: '{secondary.900}',
    size: '25px',
    fontSize: '0.875rem',
    fontWeight: '500',
    borderRadius: '50%',
    shadow: 'none'
};

export const steppanels: StepperTokenSections.Steppanels = {
    padding: '0.875rem 0.5rem 1.125rem 0.5rem'
};

export const steppanel: StepperTokenSections.Steppanel = {
    background: '{content.background}',
    color: '{content.color}',
    padding: '0',
    indent: '1rem'
};

export const colorScheme: StepperTokenSections.ColorScheme = {
    light: {
        stepNumber: {
            background: '{generic.white}',
            activeBackground:'{generic.white}',
            borderColor: '{neutralBlue.400}',
            color: '{neutralBlue.400}'
        }
    },
    dark: {
        stepNumber: {
            background: '{neutralBlue.200}',
            borderColor: '{neutralBlue.200}',
            color: '{neutralBlue.900}'
        }
    }
};

export const css: StepperTokenSections.CSS = /*css*/ `



.p-step:has(~ .p-step-active) .p-step-number {
    border-color: dt('primary.300');
    background: dt('primary.300');
    color: dt('secondary.900');
}


.p-stepitem:last-child.p-stepitem-active .p-step-number {
    background: dt('primary.300');
}


.p-step:last-child.p-step-active .p-step-number {
    background: dt('primary.300');
    border-color: dt('primary.300');
}

.p-step-title {
    overflow: unset;
}

/*Custom stepper Mi6 horizontal*/
.d-custom-step-horizontal{
    width: 100%;
    display: flex;
    flex-direction: column;
}
.d-custom-step-horizontal .p-steplist{
    gap:0px;
    overflow-x: unset;
    .p-step {
        gap:0px;
        padding:0px;
        
        .p-step-header{
            padding:0px;
            flex-direction: column;
            .p-step-title{
                position: absolute;
                width: auto;
                top: 30px;
                font-size: 0.625rem;
                display: flex;
                flex-direction: column;
                span{
                    text-align: left;
                }
                z-index: 200;
            }
            
        }
    }
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 30px;
    /*overflow: hidden;*/
}

.d-custom-step-horizontal .p-steplist {
    
    
}

.d-custom-step-horizontal .p-steplist .p-step .p-step-header .p-step-title{
    font-size: 0.625rem;
    color: dt('neutralBlue.900');
    line-height: 0.875rem;
    span:last-child{
        font-size: 0.75rem;
        line-height: 1.125rem;
        color: dt('neutralBlue.400');
    }

        
}


.d-custom-step-label{
  display: flex;
  flex-direction: column;
  align-items: baseline;
  span:first-child  {
    font-size: 10px;
    line-height: 14px;
    color: dt('neutralBlue.900');
  };
  span:last-child {
    font-size: 12px;
    line-height: 18px;
    color: dt('neutralBlue.400');
  }
  
}


/*Custom stepper Mi6 Vertical*/


.d-custom-step-vertical .p-stepitem:has(~ .p-stepitem-active) .p-step .p-step-number {
    border-color: dt('primary.300');   
    background: dt('primary.300');
    color: dt('secondary.900'); 
}

.d-custom-step-vertical .p-stepitem{
    gap:0px;
    padding:0px;
    .p-step {
        gap:0px;
        padding:0px;
        
        .p-step-header{
            padding:0px;
            
            .p-step-title{
                font-size: 0.625rem;
                position: absolute;
                left: 30px;
                
            }
            
        }
    }
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 30px;
    overflow: hidden;
    .p-steppanel {

    }
    .p-stepper-separator{
        left: -14px;
    }
}
/* sin número vertical   */
/*.d-not-number-vertical{
    .p-stepitem{
        .p-step{
            .p-step-number{
                background-color: red;
                content: "" !important;
            }
        }
    }
} */
/* importante solo aplicar para estilo mi6 ya que realiza reset visual a los contenidos a .p-step-number */
.d-not-number-vertical .p-stepitem .p-step{
    .p-step-number{
            font-size: 0;
            color: transparent;  
            display: flex;
            justify-content: center;
            align-items: center;      
    }
    
}
.d-not-number-vertical .p-stepitem:last-child.p-stepitem-active .p-step{
    .p-step-number::before{
        content: '\\e909'; 
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: "primeicons"; 
        color:dt('secondary.900');
        font-size: 16.8px;
        font-weight: 700;
        z-index: 3;
    }
}
.d-not-number-vertical .p-stepitem.p-stepitem-active .p-step
{


    .p-step-number{
        font-size: 0;
        color: transparent;  
        display: flex;
        justify-content: center;
        align-items: center;  
        position: relative;
        z-index: 1;    
    }
    .p-step-number::after{
        content: '\\e911';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: "primeicons"; 
        color:dt('primary.300');
        font-size: 12px;
        height: 22px;
        position: absolute;
        z-index: 2;
    }
    
}



/* Custom Mi6 linea superior */

.d-custom-step-top-line{
    gap:65px;
}


@media (max-width: 768px) {
    .d-custom-step-top-line{
        gap:20px;
    }
}

.d-custom-step-top-line .p-step{
    flex: 1 0 auto;
    padding: 0px;
    position: relative;
    z-index: 1;
    .p-step-number{
        width: 36px;
        height: 36px;
        font-size: 1rem;
    }
}



.d-custom-step-top-line .p-step:after{
    content: "";
    height: 4px;
    background-color: dt('neutralBlue.400');
    border-radius: 20px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}

.d-custom-step-top-line .p-step:has(~ .p-step-active):after  {
    background-color: dt('primary.300');
}

.d-custom-step-top-line .p-step.p-step-active:after{
    background-color: dt('primary.300');
}

.d-custom-step-top-line .p-step:last-child.p-step-active:after{
    background-color: dt('primary.300');
}


.d-custom-step-top-line .p-step .p-step-header{
    padding: 16px 0px;
}


.d-custom-step-top-line .p-step .p-stepper-separator{
    display: none;
}


.d-custom-step-top-line  .p-step-title {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  
  
  span:first-child  {
    font-size: 0.875rem;
    line-height: 20px;
    color: dt('neutralBlue.400');
  }

  span:last-child {
    font-size: 1rem;
    line-height: 20px;
    color: dt('neutralGray.700');
    }
}

.d-custom-step-top-line .p-step:last-child.p-step-active .p-step-title span:first-child {
    color: dt('primary.300');
}


/* estilo sin contenido de numero circulo y ok*/


.d-custom-step-circle .p-step  .p-step-number{
      font-size: 0;
      color: transparent;
      display: flex;
}

.d-custom-step-circle .p-step.p-step-active .p-step-number{
      &:after{
         content: '\\e911';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: "primeicons"; 
        color:dt('primary.300');
        font-size: 12px;
        height: 22px;
        position: absolute;
        z-index: 2;
      }
}

.d-custom-step-circle .p-step:last-child.p-step-active .p-step-number{
    &:after{
        content: '\\e909'; 
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: "primeicons"; 
        color:dt('secondary.900');
        font-size: 16.8px;
        font-weight: 700;
        z-index: 3;
    }
}
    
 

.d-custom-step-circle .p-step .p-step-title{
    
    
}

`;


export default {
    root,
    separator,
    step,
    stepHeader,
    stepTitle,
    stepNumber,
    steppanels,
    steppanel,
    colorScheme,
    css
} satisfies StepperDesignTokens;
