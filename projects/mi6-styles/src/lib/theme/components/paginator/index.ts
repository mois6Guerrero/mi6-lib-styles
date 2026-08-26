 
export default {
         
    colorScheme:{
        light:{
                navButton:{
                    selectedColor:'{secondary.900}',
                    selectedBackground:'{primary.300}',
                    hoverBackground:'{neutralBlue.300}',
                    hoverColor:'{secondary.900}',
                    borderRadius: '{border.radius.md}'
                },

                root:{
                    color:'{secondary.900}'
                }
                
                 
            }
                
        },

        css: (   ) => {
        return `
            :root {
                --p-paginator-nav-button-width: 35px;
                --p-paginator-nav-button-height: 36px;
            }
 
         `;
    }
    
};
