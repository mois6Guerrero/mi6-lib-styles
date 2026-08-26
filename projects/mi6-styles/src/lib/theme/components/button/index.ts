/* src/theme/overrides/button.ts */
const button = {
    css: ({ dt }: { dt: (token: string) => string | number | undefined }) => `
      :root {
        --mi6-focus-shadow: ${dt('focusRing.shadow')};
        --mi6-button-radius: 4px;
      }

      /* Base */
      .p-button {
        border-radius: var(--mi6-button-radius);
        display: inline-flex;
        align-items: center;
        gap: 8px;
        line-height: 1;
        transition: background .2s, color .2s, border-color .2s, box-shadow .2s;
        border-width: 1px;
        border-style: solid;
        text-decoration: none;
      }
      .p-button .p-button-label { font-weight: 700; }
      .p-button .p-button-icon { display:inline-flex; align-items:center; justify-content:center; }
      .p-button i.pi { display:inline-flex; align-items:center; line-height:1; }

      /* Tamaños */
      .p-button { height: 40px; padding: 14px 20px; font-size: 14px; }
      .p-button .p-button-icon { font-size: 16px; }
      .p-button.p-button-sm { height: 32px; padding: 8px 12px; font-size: 12px; }
      .p-button.p-button-sm .p-button-icon { font-size: 14px; }
      .p-button.p-button-lg { height: 48px; padding: 14px 20px; font-size: 16px; }
      .p-button.p-button-lg .p-button-icon { font-size: 18px; }

      /* Icon-only */
      .p-button.p-button-icon-only { padding:0; width:40px; height:40px; justify-content:center; align-items:center; gap:0; }
      .p-button.p-button-icon-only .p-button-icon { margin:0; }
      .p-button.p-button-icon-only.p-button-sm { width:32px; height:32px; }
      .p-button.p-button-icon-only.p-button-lg { width:48px; height:48px; }
      .p-button.p-button-icon-only.mi6-btn-xs { width:28px; height:28px; }
      .p-button .p-button-icon-left  { margin-right:8px; }
      .p-button .p-button-icon-right { margin-left:8px; }

      /* Primary (solid) */
      .p-button.p-button-primary { background:${dt('primary.300')}; color:${dt('neutralGray.900')}; border-color:transparent; }
      .p-button.p-button-primary:not(.p-disabled):hover  { background:${dt('primary.400')}; color:${dt('secondary.900')}; }
      .p-button.p-button-primary:not(.p-disabled):active { background:${dt('primary.300')}; color:${dt('secondary.900')}; }
      .p-button.p-button-primary:focus-visible           { box-shadow:var(--mi6-focus-shadow); outline:none; }
      .p-button.p-button-primary.mi6-hovered            { background:${dt('primary.400')}; color:${dt('secondary.900')}; }
      .p-button.p-button-primary.mi6-pressed            { background:${dt('primary.300')}; color:${dt('secondary.900')}; }
      .p-button.p-button-primary.mi6-focused            { box-shadow:var(--mi6-focus-shadow); outline:none; }

      /* Danger (solid) */
      .p-button.p-button-danger { background:${dt('error.300')}; color:${dt('neutralGray.900')}; border-color:transparent; }
      .p-button.p-button-danger:not(.p-disabled):hover  { background:${dt('error.400')}; color:${dt('secondary.900')}; }
      .p-button.p-button-danger:not(.p-disabled):active { background:${dt('error.500')}; color:${dt('neutralGray.900')}; }
      .p-button.p-button-danger:focus-visible           { box-shadow:var(--mi6-focus-shadow); outline:none; }
      .p-button.p-button-danger.mi6-hovered            { background:${dt('error.400')}; color:${dt('secondary.900')}; }
      .p-button.p-button-danger.mi6-pressed            { background:${dt('error.500')}; color:${dt('neutralGray.900')}; }
      .p-button.p-button-danger.mi6-focused            { box-shadow:var(--mi6-focus-shadow); outline:none; }

      /* Disabled (solid) */
      .p-button.p-button-primary:disabled,
      .p-button.p-button-primary.p-disabled { background:${dt('neutralBlue.200')}; color:${dt('neutralGray.700')}; border-color:${dt('neutralBlue.300')}; text-decoration:none; }
      .p-button.p-button-danger:disabled,
      .p-button.p-button-danger.p-disabled { background:${dt('error.50')}; color:${dt('error.400')}; border-color:transparent; text-decoration:none; }

      /* Text variant */
      .p-button.p-button-primary.p-button-text{
        background:transparent; border-color:transparent; color:${dt('primary.600')};
      }
      .p-button.p-button-primary.p-button-text:not(.p-disabled):hover  { background:${dt('primary.50')};  color:${dt('primary.700')}; }
      .p-button.p-button-primary.p-button-text:not(.p-disabled):active { background:${dt('primary.100')}; color:${dt('primary.800')}; }
      .p-button.p-button-primary.p-button-text:focus-visible            { box-shadow:var(--mi6-focus-shadow); outline:none; }

      .p-button.p-button-danger.p-button-text{
        background:transparent; border-color:transparent; color:${dt('error.600')};
      }
      .p-button.p-button-danger.p-button-text:not(.p-disabled):hover  { background:${dt('error.50')};  color:${dt('error.700')}; }
      .p-button.p-button-danger.p-button-text:not(.p-disabled):active { background:${dt('error.100')}; color:${dt('error.800')}; }
      .p-button.p-button-danger.p-button-text:focus-visible            { box-shadow:var(--mi6-focus-shadow); outline:none; }

      /* Link (tertiary) */
      .p-button.p-button-link{
        background:transparent; border-color:transparent; border-width:0;
        color:${dt('tertiary.800')};
        padding:0; height:auto;
      }
      .p-button.p-button-link:not(.p-disabled):hover,
      .p-button.p-button-link:not(.p-disabled):active,
      .p-button.p-button-link.mi6-hovered,
      .p-button.p-button-link.mi6-pressed,
      .p-button.p-button-link.p-button-danger:not(.p-disabled):hover,
      .p-button.p-button-link.p-button-danger:not(.p-disabled):active,
      .p-button.p-button-link.p-button-danger.mi6-hovered,
      .p-button.p-button-link.p-button-danger.mi6-pressed { background:transparent; border-color:transparent; }

      /* Subrayado en default, hover, focus y disabled (no en pressed) */
      .p-button.p-button-link .p-button-label { text-decoration:underline; }
      .p-button.p-button-link:not(.p-disabled):active .p-button-label,
      .p-button.p-button-link.mi6-pressed .p-button-label { text-decoration:none; }
      .p-button.p-button-link:focus-visible .p-button-label,
      .p-button.p-button-link.mi6-focused .p-button-label { text-decoration:underline; }

      /* Colores por estado (normal) */
      .p-button.p-button-link:not(.p-disabled):hover,
      .p-button.p-button-link.mi6-hovered { color:${dt('tertiary.900')}; }
      .p-button.p-button-link:not(.p-disabled):active,
      .p-button.p-button-link.mi6-pressed { color:${dt('tertiary.800')}; }
      .p-button.p-button-link:focus-visible,
      .p-button.p-button-link.mi6-focused { box-shadow:none; outline:none; color:${dt('tertiary.500')}; }

      /* Disabled */
      .p-button.p-button-link.p-disabled,
      .p-button.p-button-link[disabled],
      .p-button.p-button-link[aria-disabled="true"]{
        color:${dt('neutralGray.700')}; pointer-events:none;
      }
      .p-button.p-button-link.p-disabled .p-button-label,
      .p-button.p-button-link[disabled] .p-button-label,
      .p-button.p-button-link[aria-disabled="true"] .p-button-label { text-decoration:underline; }

      /* Link danger */
      .p-button.p-button-link.p-button-danger { color:${dt('error.600')}; }
      .p-button.p-button-link.p-button-danger .p-button-label { text-decoration:underline; }
      .p-button.p-button-link.p-button-danger:not(.p-disabled):hover,
      .p-button.p-button-link.p-button-danger.mi6-hovered { color:${dt('error.700')}; }
      .p-button.p-button-link.p-button-danger:not(.p-disabled):active,
      .p-button.p-button-link.p-button-danger.mi6-pressed { color:${dt('error.800')}; }
      .p-button.p-button-link.p-button-danger:not(.p-disabled):active .p-button-label,
      .p-button.p-button-link.p-button-danger.mi6-pressed .p-button-label { text-decoration:none; }
      .p-button.p-button-link.p-button-danger:focus-visible,
      .p-button.p-button-link.p-button-danger.mi6-focused { box-shadow:var(--mi6-focus-shadow); outline:none; color:${dt('error.600')}; }
      .p-button.p-button-link.p-button-danger.p-disabled,
      .p-button.p-button-link.p-button-danger[disabled],
      .p-button.p-button-link.p-button-danger[aria-disabled="true"]{ color:${dt('error.300')}; }
      .p-button.p-button-link.p-button-danger.p-disabled .p-button-label,
      .p-button.p-button-link.p-button-danger[disabled] .p-button-label,
      .p-button.p-button-link.p-button-danger[aria-disabled="true"] .p-button-label { text-decoration:underline; }

      /* Secondary (outlined = MI6 secondary) */
      .p-button.p-button-primary.p-button-outlined,
      .p-button.p-button-secondary:not(.mi6-secondary-danger) {
        background:transparent; border-color:${dt('primary.300')}; color:${dt('neutralGray.900')}; border-width:2px;
      }
      .p-button.p-button-primary.p-button-outlined:not(.p-disabled):hover,
      .p-button.p-button-secondary:not(.mi6-secondary-danger):not(.p-disabled):hover,
      .p-button.p-button-primary.p-button-outlined.mi6-hovered,
      .p-button.p-button-secondary:not(.mi6-secondary-danger).mi6-hovered {
        background:${dt('neutralBlue.50')}; border-color:${dt('primary.200')}; color:${dt('neutralGray.900')}; border-width:2px;
      }
      .p-button.p-button-primary.p-button-outlined:not(.p-disabled):active,
      .p-button.p-button-secondary:not(.mi6-secondary-danger):not(.p-disabled):active,
      .p-button.p-button-primary.p-button-outlined.mi6-pressed,
      .p-button.p-button-secondary:not(.mi6-secondary-danger).mi6-pressed {
        background:${dt('primary.50')}; border-color:${dt('primary.300')}; color:${dt('neutralGray.900')};
      }
      .p-button.p-button-primary.p-button-outlined:focus-visible,
      .p-button.p-button-secondary:not(.mi6-secondary-danger):focus-visible,
      .p-button.p-button-primary.p-button-outlined.mi6-focused,
      .p-button.p-button-secondary:not(.mi6-secondary-danger).mi6-focused {
        box-shadow:var(--mi6-focus-shadow); outline:none; border-color:${dt('primary.300')};
      }
      .p-button.p-button-primary.p-button-outlined.p-disabled,
      .p-button.p-button-primary.p-button-outlined[disabled],
      .p-button.p-button-secondary:not(.mi6-secondary-danger).p-disabled,
      .p-button.p-button-secondary:not(.mi6-secondary-danger)[disabled]{
        background:transparent; border-color:${dt('neutralBlue.300')}; color:${dt('neutralGray.700')};
      }

      /* Secondary danger */
      .p-button.p-button-danger.p-button-outlined,
      .p-button.p-button-secondary.mi6-secondary-danger {
        background:transparent; border-color:${dt('error.400')}; color:${dt('error.400')};
      }
      .p-button.p-button-danger.p-button-outlined:not(.p-disabled):hover,
      .p-button.p-button-secondary.mi6-secondary-danger:not(.p-disabled):hover,
      .p-button.p-button-danger.p-button-outlined.mi6-hovered,
      .p-button.p-button-secondary.mi6-secondary-danger.mi6-hovered {
        background:${dt('neutralBlue.50')}; border-color:${dt('error.400')}; color:${dt('error.400')};
      }
      .p-button.p-button-danger.p-button-outlined:not(.p-disabled):active,
      .p-button.p-button-secondary.mi6-secondary-danger:not(.p-disabled):active,
      .p-button.p-button-danger.p-button-outlined.mi6-pressed,
      .p-button.p-button-secondary.mi6-secondary-danger.mi6-pressed {
        background:${dt('error.50')}; border-color:${dt('error.400')}; color:${dt('error.400')};
      }
      .p-button.p-button-danger.p-button-outlined:focus-visible,
      .p-button.p-button-secondary.mi6-secondary-danger:focus-visible,
      .p-button.p-button-danger.p-button-outlined.mi6-focused,
      .p-button.p-button-secondary.mi6-secondary-danger.mi6-focused {
        box-shadow:var(--mi6-focus-shadow); outline:none; border-color:${dt('error.500')};
      }
      .p-button.p-button-danger.p-button-outlined.p-disabled,
      .p-button.p-button-danger.p-button-outlined[disabled],
      .p-button.p-button-secondary.mi6-secondary-danger.p-disabled,
      .p-button.p-button-secondary.mi6-secondary-danger[disabled]{
        background:transparent; border-color:${dt('error.300')}; color:${dt('error.300')};
      }

      /* Utilidades */
      .p-button.p-button-loading .p-button-icon { margin-right: 8px; }
      .p-button.mi6-focused { box-shadow: var(--mi6-focus-shadow); outline: none; }
      `
};

export default button;
