import type { DialogDesignTokens, DialogTokenSections } from '@primeuix/themes/types/dialog';

export const root: DialogTokenSections.Root = {
    background: '{generico.white}',
    borderColor: 'none',
    color: '{neutralBlue.900}',
    borderRadius: '4px',
    shadow: '0 20px 40px -8px rgba(16, 24, 40, 0.10)'
};

export const header: DialogTokenSections.Header = {
    padding: '{overlay.modal.padding}',
    gap: '0.5rem'
};

export const title: DialogTokenSections.Title = {
    fontSize: '1.25rem',
    fontWeight: '600'
};

export const content: DialogTokenSections.Content = {
    padding: '0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}'
};

export const footer: DialogTokenSections.Footer = {
    padding: '0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}',
    gap: '0.5rem'
};

export const css: DialogTokenSections.CSS = /*css*/ `
    .custom-mi6-modal, p-dialog.custom-mi6-modal, .p-dialog.custom-mi6-modal {
        .p-dialog-content{
            padding-top: 0px;
            padding-bottom: 24px;
        }
        .p-dialog-header{
            display: flex;
            justify-content: center;
            position: relative;
            padding-bottom: 0px;
            .p-dialog-header-actions{
                position: absolute;
                right: 24px;
                top: 24px;
                
                .p-button{
                    border: none;
                    width: 15px;
                    height: 15px;
                    color: dt('neutralBlue.800')
                }
            }
        }

        .p-dialog-footer{
            ng-component{
                width: 100%;
                display: flex;
                justify-content: center;
                gap: 30px;  
                > * {
                    flex-grow: 1;
                display: flex;
                justify-content: space-between;
                > * {
                    flex-grow: 1;
                }
            }
        }
        
    }
`;

export default {
    root,
    header,
    title,
    content,
    footer,
    css
} satisfies DialogDesignTokens;

// export default {
         
//     colorScheme:{
//         light:{
                 
                 
//             }
               
//     },
//     css: ({ dt }: { dt: (token: string) => string | number | undefined }) => {
//         return `
 
//         :root {
//             --mi6-focus-shadow: ${dt('focusRing.shadow')};
//             --mi6-button-radius: 8px;
             
//         }
//         .p-button.p-button-icon-only{
//             border: none;
//             border-color: transparent;
//         }
//         .p-button{
//             color: ${dt('generico.black')} !important;
//             width: 80%;
//         }
//         .p-button.p-button-primary.p-button-outlined, .p-button.p-button-secondary:not(.mi6-secondary-danger) {
//             width: 80%;
//         } 
                           
//     `;
//     }
// };
