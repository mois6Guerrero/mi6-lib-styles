export default {         
    colorScheme:{
        light:{
                               
                 
            }
                
        },
        //.p-multiselect-overlay-shadow:0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 1px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12);

        css: ({ dt }: { dt: (token: string) => string | number | undefined }) => {
        return `
            :root {
                --p-select-dropdown-color:  ${dt('primary.400')} !important;
                --p-select-shadow: unset !important;
                --p-checkbox-border-color: ${dt('primary.400')} !important;

                --p-overlay-select-shadow: 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 1px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12);
                --p-select-overlay-color: ${dt('primary.400')} !important;
            }           
            .p-icon {
                color:  ${dt('secondary.400')} !important;                
            } 
            .p-component-overlay.p-component{
                border-color: ${dt('primary.400')} !important;
            }
            .p-multiselect {
                border: 1px solid ${dt('primary.300')} !important;
                box-shadow: unset;           
            } 
            .p-multiselect-list-container{
                border: 1px solid ${dt('primary.300')} !important;
            }
            .p-multiselect-option {
                border-color: gray;
                border-top-width: thin;
                border-top-style: ridge;
                border-top-color: ${dt('neutralBlue.300')} !important;                 
            }  
            .p-multiselect-dropdown {
                color: ${dt('primary.300')} !important;
            } 
            .p-multiselect-overlay {
                color: ${dt('primary.400')} !important;
                border: 1px solid  ${dt('primary.400')} !important;
            } 
            .ngp-help-btn {
                background: rgb(46, 52, 56) !important;
                color: rgb(238, 244, 249) !important;
            }
         `;
    }
};
