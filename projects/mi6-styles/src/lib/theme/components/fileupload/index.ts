const fileupload = {
  css: ({ dt }: { dt: (token: string) => string | number | undefined }) => `
    :root{
      --fu-radius: 8px;
      --fu-row-radius: 6px;
      --fu-gap: 8px;

      --fu-bg: ${dt?.('surfaceLight.0')};
      --fu-border: ${dt?.('surfaceLight.300')};
      --fu-muted: ${dt?.('contentLight.secondary')};
      --fu-text: ${dt?.('contentLight.text')};

      --white: ${dt?.('generico.white')};

      --success-400: ${dt?.('success.400')};
      --nb-50: ${dt?.('neutralBlue.50')};
      --nb-200: ${dt?.('neutralBlue.200')};
      --nb-300: ${dt?.('neutralBlue.300')};
      --nb-400: ${dt?.('neutralBlue.400')};
      --nb-500: ${dt?.('neutralBlue.500')};

      --ng-700: ${dt?.('neutralGray.700')};
      --sec-900: ${dt?.('secondary.900')};
      --focus-ring: 0 0 0 4px rgba(225,225,254,.7);
    }

    .p-fileupload{
      border:1px solid var(--fu-border);
      border-radius:var(--fu-radius);
      background:var(--fu-bg);
      padding:12px;
      color:var(--fu-text);
      overflow:visible;
    }
    .p-fileupload .p-fileupload-toolbar{
      display:flex; gap:var(--fu-gap);
      border:0; background:transparent; padding:0 0 8px 0;
      border-bottom:1px solid var(--fu-border);
    }
    .p-fileupload-content{
      border:0; background:transparent; padding:0;
      overflow:visible;
    }
    .p-fileupload-files{ display:grid; gap:8px; }
    .p-fileupload-row{
      display:grid; grid-template-columns:1fr auto; align-items:center;
      background:${dt?.('neutralBlue.100')};
      border:1px solid var(--fu-border);
      border-radius:var(--fu-row-radius);
      padding:8px 12px;
    }
    .p-fileupload-row .p-fileupload-file-name{ font-weight:600; }
    .p-fileupload-row .p-fileupload-file-size{ color:var(--fu-muted); font-size:12px; }
    .p-fileupload.p-disabled, .p-fileupload [disabled]{ opacity:.6; cursor:not-allowed; }

    .mi6-hide-toolbar .p-fileupload-toolbar{ display:none; }
    .mi6-hide-toolbar .p-fileupload-content{ padding-top:0; }
    .mi6-hidden{ display:none !important; }
    .mi6-hide-toolbar .p-fileupload-choose{ display:none !important; }

    .mi6-fileprompt{
      width:100%;
      min-height:148px;
      border-radius:6px;
      padding:16px;
      display:grid; place-items:center; text-align:center; gap:12px;
      border:1px solid transparent; background:var(--white);
      cursor:pointer; outline:0;
      transition: background .2s, border-color .2s, box-shadow .2s, color .2s;
    }
    .mi6-fileprompt__content{
      width:288px; min-height:116px;
      display:grid; gap:8px; place-items:center; margin:auto;
    }
    .mi6-fileprompt__icon{ color:var(--nb-500); }
    .mi6-fileprompt__title{ margin:0; color:var(--sec-900); line-height:1.15; font-weight:400; }
    .mi6-fileprompt__title .strong{ font-weight:700; text-decoration:underline; }
    .mi6-fileprompt__desc{ margin:0; color:var(--nb-500); }

    .mi6-fileprompt.is-default{ background:var(--white);  border-color:var(--success-400); }
    .mi6-fileprompt.is-focused{ background:var(--white);  border-color:var(--nb-200); box-shadow:var(--focus-ring); }
    .mi6-fileprompt.is-hovered{ background:var(--nb-50);  border-color:var(--nb-400); }
    .mi6-fileprompt.is-disabled{
      background:var(--nb-200); border-color:var(--nb-300);
      cursor:default; pointer-events:none;
    }
    .mi6-fileprompt.is-disabled .mi6-fileprompt__title,
    .mi6-fileprompt.is-disabled .mi6-fileprompt__desc{ color:var(--ng-700); }
    .mi6-fileprompt.is-disabled .mi6-fileprompt__title .strong{ text-decoration:none; font-weight:600; }

    .mi6-fileprompt:not(.is-disabled):hover{ background:var(--nb-50); border-color:var(--nb-400); }
    .mi6-fileprompt:not(.is-disabled):focus-visible{ border-color:var(--nb-200); box-shadow:var(--focus-ring); }
  `
};

export default fileupload;
