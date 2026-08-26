const megamenuHorizontal = {
  css: ({ dt }: { dt: (t: string) => string | number | undefined }) => `
    :root{
      --ux-neutral-50:   ${dt?.('neutralBlue.50')  ?? '#FAFAFA'};
      --ux-neutral-100:  ${dt?.('neutralBlue.100') ?? '#F6F7F9'};
      --ux-neutral-200:  ${dt?.('neutralBlue.200') ?? '#F0F2F6'};
      --ux-neutral-300:  ${dt?.('neutralBlue.300') ?? '#DCE2E8'};
      --ux-neutral-400:  ${dt?.('neutralBlue.400') ?? '#BEC8D2'};
      --ux-text:         ${dt?.('secondary.900')    ?? '#2B2D45'};
      --ux-tertiary:     ${dt?.('tertiary.500')     ?? '#39B7D9'};
      --ux-surface-300:  ${dt?.('neutralGray.300') ?? '#E0E0E0'};
      --ux-gray-700:     ${dt?.('neutralGray.700')  ?? '#616161'};
      --ux-cta-bg:       ${dt?.('success.400')      ?? '#4ADE80'};
      --ux-cta-bg-hov:   ${dt?.('success.500')      ?? '#22C55E'};
      --ux-cta-fg:       #0B2A1A;
      --ux-white:        ${dt?.('generico.white')   ?? '#FFFFFF'};
      --panel-title-offset: 44px;
    }

    .p-megamenu.mi6-ux-megamenu--horizontal{ background:none; border:0; padding:0; box-shadow:none; width:100%; display:block; position:relative; }
    .p-megamenu.mi6-ux-megamenu--horizontal::after{ content:""; position:absolute; left:0; right:0; bottom:0; height:1px; background:var(--ux-neutral-400); pointer-events:none; z-index:5; }

    .p-megamenu.mi6-ux-megamenu--horizontal .p-megamenu-root-list{
      display:flex; flex-wrap:nowrap; align-items:stretch; gap:0; padding:0; margin:0; white-space:nowrap; background:none;
      width:100%; border-bottom:1px solid var(--ux-neutral-400);
    }
    .p-megamenu.mi6-ux-megamenu--horizontal .p-megamenu-root-list > .p-menuitem{ flex:0 0 auto; margin:0; }

    .p-megamenu.mi6-ux-megamenu--horizontal .p-menuitem-link{ all:unset; }
    .p-megamenu.mi6-ux-megamenu--horizontal .mi6-ux-tile{
      position:relative; display:flex; align-items:center; box-sizing:border-box;
      height:78px; min-height:78px; padding:4px 8px; border-radius:0;
      background:var(--ux-white); color:var(--ux-text); cursor:pointer;
      border:0;
      transition:background .15s ease, color .15s ease, opacity .15s ease;
    }
    .p-megamenu.mi6-ux-megamenu--horizontal .mi6-ux-tile:hover{
      background:var(--ux-neutral-100);
      border-bottom-color:var(--ux-neutral-400);
    }
    .p-megamenu.mi6-ux-megamenu--horizontal .mi6-ux-tile.is-selected,
    .p-megamenu.mi6-ux-megamenu--horizontal .p-menuitem.p-menuitem-active .mi6-ux-tile{
      background:var(--ux-tertiary);
      border-bottom-color:var(--ux-neutral-400);
      box-shadow:0 1px 2px rgba(0,0,0,.04);
    }
    .p-megamenu.mi6-ux-megamenu--horizontal .mi6-ux-tile.is-disabled{
      background:var(--ux-neutral-200);
      border-bottom-color:var(--ux-neutral-300);
      color:var(--ux-gray-700);
      pointer-events:none;
    }
    .p-megamenu.mi6-ux-megamenu--horizontal .mi6-ux-tile:focus-visible{ outline:2px solid var(--ux-tertiary); outline-offset:2px; }
    .p-megamenu.mi6-ux-megamenu--horizontal .mi6-ux-tile.is-home{ padding:0 16px; justify-content:center; height:78px; }

    .p-megamenu.mi6-ux-megamenu--horizontal .mi6-ux-icon{
      width:28px; height:28px; border-radius:8px; display:inline-flex; align-items:center; justify-content:center; font-size:18px;
      color:var(--ux-tertiary); transition:color .15s ease;
    }

    .p-megamenu.mi6-ux-megamenu--horizontal .mi6-ux-caret{
      position:absolute; right:16px; top:50%; transform:translateY(-50%); font-size:16px;
      color:var(--ux-text);
    }

    .p-megamenu.mi6-ux-megamenu--horizontal .mi6-ux-tile.is-selected .mi6-ux-icon{ color:var(--ux-text); }
    .p-megamenu.mi6-ux-megamenu--horizontal .mi6-ux-tile.is-disabled .mi6-ux-icon{ color:var(--ux-gray-700); }

    .p-megamenu.mi6-ux-megamenu--horizontal .mi6-ux-dot{ width:16px; height:16px; border-radius:2px; background:var(--ux-tertiary); margin-right:10px; flex:0 0 auto; transition:background .15s ease; }
    .p-megamenu.mi6-ux-megamenu--horizontal .mi6-ux-tile.is-selected .mi6-ux-dot{ background:var(--ux-text); }
    .p-megamenu.mi6-ux-megamenu--horizontal .mi6-ux-tile.is-disabled .mi6-ux-dot{ background:var(--ux-gray-700); }

    .p-megamenu.mi6-ux-megamenu--horizontal .mi6-ux-text{ display:flex; flex-direction:column; line-height:1.15; min-width:0; padding-right:30px; }
    .p-megamenu.mi6-ux-megamenu--horizontal .mi6-ux-title{ font-weight:600; color:var(--ux-text); }
    .p-megamenu.mi6-ux-megamenu--horizontal .mi6-ux-tile.is-disabled .mi6-ux-title,
    .p-megamenu.mi6-ux-megamenu--horizontal .mi6-ux-tile.is-disabled .mi6-ux-support{ color:var(--ux-gray-700); }
    .p-megamenu.mi6-ux-megamenu--horizontal .mi6-ux-support{ font-size:12px; color:var(--ux-text); }

    .p-megamenu.mi6-ux-megamenu--horizontal .p-megamenu-panel{
      position:relative; z-index:1;
      border:1px solid var(--ux-neutral-200); border-radius:10px; background:var(--ux-white);
      padding:32.5px 32.5px 32.5px 120px;
    }

    .p-megamenu.mi6-ux-megamenu--horizontal .p-megamenu-grid{
      display:grid;
      grid-template-columns:1fr 1fr 1fr 1fr;
      gap:12px;
      align-items:stretch;
      margin-left:120px;
      padding-top:32.5px;
      padding-bottom:12.5px;
      background: linear-gradient(to right, transparent 0 75%, var(--ux-neutral-50) 75% 100%);
      box-sizing:border-box;
    }

    .p-megamenu.mi6-ux-megamenu--horizontal .p-megamenu-grid > *:nth-child(2),
    .p-megamenu.mi6-ux-megamenu--horizontal .p-megamenu-grid > *:nth-child(3){
      padding-top: var(--panel-title-offset);
    }

    .p-megamenu.mi6-ux-megamenu--horizontal .p-megamenu-grid > *:nth-child(4){
      padding-top:80px;
      padding-left:10px;
      box-sizing:border-box;
    }

    .p-megamenu.mi6-ux-megamenu--horizontal .p-megamenu-panel .p-megamenu-submenu > li,
    .p-megamenu.mi6-ux-megamenu--horizontal .p-megamenu-panel .p-megamenu-submenu > li:hover,
    .p-megamenu.mi6-ux-megamenu--horizontal .p-megamenu-panel .p-menuitem:hover,
    .p-megamenu.mi6-ux-megamenu--horizontal .p-megamenu-panel .p-menuitem:focus,
    .p-megamenu.mi6-ux-megamenu--horizontal .p-megamenu-panel .p-menuitem-content:hover{
      background:transparent;
    }

    .p-megamenu-col-2, .p-megamenu-col-3, .p-megamenu-col-4, .p-megamenu-col-6, .p-megamenu-col-12{ flex:0 0 auto; padding:0; width:100%; }
    .p-megamenu.mi6-ux-megamenu--horizontal .p-megamenu-submenu > .p-megamenu-submenu-label{ display:none; }

    .p-megamenu.mi6-ux-megamenu--horizontal .mi6-ux-panel-title{
      font-size:16px; line-height:24px; font-weight:700; color:var(--ux-text); text-decoration:underline; margin:0 0 0 0;
      cursor:default;
    }

    .p-megamenu.mi6-ux-megamenu--horizontal .mi6-ux-group{ display:flex; flex-direction:column; }

    .p-megamenu.mi6-ux-megamenu--horizontal .mi6-ux-group-header{
      display:flex; align-items:center; gap:8px;
      font-size:16px; line-height:24px; font-weight:700; color:var(--ux-text);
      cursor:default; margin-top:20px;
    }
    .p-megamenu.mi6-ux-megamenu--horizontal .p-megamenu-submenu > li:first-of-type .mi6-ux-group-header{
      margin-top:0;
    }
    .p-megamenu.mi6-ux-megamenu--horizontal .p-megamenu-submenu > li:first-of-type + li .mi6-ux-group-header{
      margin-top:0;
    }

    .p-megamenu.mi6-ux-megamenu--horizontal .mi6-ux-link{
      display:block; text-decoration:none; color:var(--ux-text);
      padding:8px 35px;
      border:none; 
      box-sizing:border-box;
      background-clip:content-box;
      transition: background .15s, color .15s, border-color .15s;
    }
    .p-megamenu.mi6-ux-megamenu--horizontal .mi6-ux-link:hover,
    .p-megamenu.mi6-ux-megamenu--horizontal .mi6-ux-link.hovered{
      background:var(--ux-neutral-200);
      border-bottom-color:var(--ux-neutral-300);
      color:var(--ux-text);
    }
    .p-megamenu.mi6-ux-megamenu--horizontal .mi6-ux-link.is-selected{
      background:var(--ux-tertiary);
      border-bottom-color:var(--ux-neutral-300);
      color:var(--ux-text);
    }
    .p-megamenu.mi6-ux-megamenu--horizontal .mi6-ux-link.is-disabled{
      background:var(--ux-neutral-200);
      border-bottom-color:var(--ux-neutral-300);
      color:var(--ux-gray-700);
      pointer-events:none;
    }

    .p-megamenu.mi6-ux-megamenu--horizontal .mi6-ux-rail{
      background:transparent; border-radius:0; padding:0; display:flex; flex-direction:column; gap:8px; height:100%;
    }
    .p-megamenu.mi6-ux-megamenu--horizontal .rail-title{ font-size:14px; line-height:20px; color:var(--ux-text); display:flex; align-items:center; gap:8px; text-decoration:none; padding:0; border-radius:6px; }
    .p-megamenu.mi6-ux-megamenu--horizontal .rail-title:hover{ background:var(--ux-neutral-100); color:var(--ux-text); }
    .p-megamenu.mi6-ux-megamenu--horizontal .rail-dot{ width:16px; height:16px; border-radius:3px; background:var(--ux-surface-300); }
    .p-megamenu.mi6-ux-megamenu--horizontal .mi6-ux-help{ font-size:12px; line-height:16px; font-weight:700; color:var(--ux-tertiary); display:inline-flex; align-items:center; gap:6px; margin-top:24px; text-decoration:none; }

    .p-megamenu.mi6-ux-megamenu--horizontal .mi6-ux-tile--cta{ padding:0 16px; display:flex; align-items:center; justify-content:center; }
    .p-megamenu.mi6-ux-megamenu--horizontal .mi6-cta-btn.p-button{
      height:40px; padding:0 16px; border-radius:8px; font-weight:700; background:var(--ux-cta-bg); border-color:var(--ux-cta-bg); color:var(--ux-cta-fg);
      display:inline-flex; align-items:center; gap:8px;
    }
    .p-megamenu.mi6-ux-megamenu--horizontal .mi6-cta-btn.p-button:hover{ background:var(--ux-cta-bg-hov); border-color:var(--ux-cta-bg-hov); }

    .p-megamenu-overlay{ border:none; border-radius:0; box-shadow:none; }

    .p-megamenu.mi6-ux-megamenu--horizontal .p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover,
    .p-megamenu.mi6-ux-megamenu--horizontal .p-megamenu-item:hover > .p-megamenu-item-content,
    .p-megamenu.mi6-ux-megamenu--horizontal .p-megamenu-item.p-highlight > .p-megamenu-item-content,
    .p-megamenu.mi6-ux-megamenu--horizontal .p-megamenu-item.p-focus > .p-megamenu-item-content,
    .p-megamenu.mi6-ux-megamenu--horizontal .p-megamenu-item > .p-megamenu-item-content:focus,
    .p-megamenu.mi6-ux-megamenu--horizontal .p-megamenu-item > .p-megamenu-item-content:focus-visible{
      background: transparent;
      box-shadow: none;
    }
  `
};
export default megamenuHorizontal;
