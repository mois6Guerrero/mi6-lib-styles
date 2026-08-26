
export default {
         
    colorScheme:{
        light:{
                panel: {
                    color: '{neutralGray.900}',
                    hover:  '{neutralBlue.100}' 
                },
                dropdown: {
                    borderColor: '{neutralBlue.400}',
                    color: '{primary.500}',
                    hoverColor: '{primary.300}'
                },
                
                date:{
                    color: '{neutralGray.900}'
                },
                
                today:{
                    color: '{neutralGray.900}',
                    background:  '{neutralBlue.300}' 
                },
                day:{

                    color: '{neutralGray.900}'
                }
                 
            }
                
    },
    css: ({ dt }: { dt: (token: string) => string | number | undefined }) => {
        return `
        :root {
            --p-datepicker-dropdown-hover-border-color:'{primary.300}';
            --p-datepicker-dropdown-hover-background: ${dt('generico.white')} !important;
            --p-datepicker-dropdown-hover-color: ${dt('primary.300')} !important;
            --p-datepicker-dropdown-border-color: ${dt('neutralBlue.400')};
        }


        .p-datepicker-dropdown {
            cursor: pointer;
            display: inline-flex;
            user-select: none;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            position: relative;
            width: var(--p-datepicker-dropdown-width);
            border-start-end-radius: var(--p-datepicker-dropdown-border-radius);
            border-end-end-radius: var(--p-datepicker-dropdown-border-radius);
            background:  ${dt('generico.white')} ;
            border: 1px solid var(--p-datepicker-dropdown-border-color);
            border-inline-start: 0 none;
            color: var(--p-datepicker-dropdown-color);
            transition: background var(--p-datepicker-transition-duration), color var(--p-datepicker-transition-duration), border-color var(--p-datepicker-transition-duration), outline-color var(--p-datepicker-transition-duration);
            outline-color: transparent;
        }

        .p-datepicker-dropdown:hover {
           
            background:  ${dt('generico.white')} ;
            
        }
       

        .p-datepicker-header .p-button {
             border-color: ${dt('generico.white')} !important;
        }

        .p-datepicker-increment-button {
            border: none !important;
        }
        .p-datepicker-decrement-button {
            border: none !important;
        }

        .p-datepicker-weekday-cell {
            background:  ${dt('generico.white')} !important;
            padding-left: 10px !important;
        }
         

        .p-datepicker-year-selected {
            color: ${dt('neutralGray.900')};
            background:  ${dt('neutralBlue.50')};
            border-radius: 16px 16px 16px 16px;
            border: 1px solid ${dt('primary.500')};
        }
        .p-datepicker-month-selected {
            color: ${dt('neutralGray.900')};
            background:  ${dt('neutralBlue.50')};
            border-radius: 16px 16px 16px 16px;
            border: 1px solid ${dt('primary.500')};
        }

        .p-datepicker-today > .p-datepicker-day-selected {
            background:  ${dt('primary.300')} !important;
            color:  ${dt('neutralGray.900')};
        }
        .p-datepicker-day-selected {
            background:  ${dt('primary.300')} !important;
            color:  ${dt('neutralGray.900')};
        }
        
        .p-datepicker-day-selected-range {
            background: ${dt('primary.100')} !important;
            color: ${dt('neutralGray.900')} !important;
        }

        .p-datepicker .p-inputtext {
            color: ${dt('neutralGray.900')} !important;
            border-color: ${dt('neutralBlue.400')} !important;
            border-right: 0;
        }

        .p-datepicker .p-inputtext:hover {
            color: ${dt('neutralGray.900')} !important;
            border-color: ${dt('primary.300')} !important;
        }

        .p-datepicker:hover {
            color: ${dt('neutralGray.900')} !important;
            border-color: ${dt('primary.300')} !important;
        }

        .p-datepicker-custom-button-sm {
            color: ${dt('neutralGray.900')} !important;
            background:  ${dt('primary.300')} !important;
        }

        .p-datepicker-custom-button-secondary {
            color: ${dt('neutralGray.900')} !important;
            background:  ${dt('neutralBlue.50')} !important;
        }

        .p-button .p-button-secondary{
            border-color: transparent;
        }

        .p-button:hover  .p-button-secondary:hover {
            border-color: transparent;
        }

        

        .p-datepicker table td {
            padding: 0.1rem !important;
        }

        .p-datepicker table td > span {
            width: 30px !important;
            height: 30px !important;
        }
                    
    `;
    }
              
    
};
