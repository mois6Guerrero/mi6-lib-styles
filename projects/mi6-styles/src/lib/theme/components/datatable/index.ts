export default {         
    colorScheme:{
        light:{
                               
                 
            }
                
        },
        css: ({ dt }: { dt: (token: string) => string | number | undefined }) => {
        return ` 
            th {
                background-color:${dt('neutralBlue.300')} !important;    
            }   
            .p-datatable-thead > tr > th {
                color: ${dt('neutralGray.800')};
            }   
            .p-datatable-tbody > tr {
                color: ${dt('neutralBlue.900')};
            }
            .p-datatable.p-datatable-striped .p-datatable-tbody > tr:nth-child(odd).p-datatable-row-selected {
                color: ${dt('neutralBlue.900')};
            }
            .p-datatable-tbody > tr.p-datatable-row-selected {
                color: ${dt('neutralBlue.900')};
            }   
            .pi-chevron-down {  
                flex-direction: column-reverse;
            }   
         `;
    }
};
