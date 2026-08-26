const tooltip = {
  root: {
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '420px',
    shadow: '0 18px 40px rgba(0,0,0,.25), 0 2px 6px rgba(0,0,0,.12)',
    bg: '{secondary.900}',
    fg: '{generico.white}'
  },

  sizes: {
    sm: {
      padding: '12px',
      fontSizeTitle: '12px',
      fontSizeDesc: '12px',
      maxW: '280px'
    },
    md: {
      padding: '16px',
      fontSizeTitle: '12px',
      fontSizeDesc: '12px',
      maxW: '420px'
    },
    lg: {
      padding: '20px',
      fontSizeTitle: '14px',
      fontSizeDesc: '13px',
      maxW: '560px'
    }
  },

  variants: {
    plain: { bg: '{secondary.900}', fg: '{generico.white}' }
  },

  css: ({ dt }: { dt: (token: string) => string | number | undefined }) => `
    :root{
      --mi6-ovl-z: 1005;
      --mi6-ovl-bg: ${dt?.('secondary.900')};
      --mi6-ovl-fg: ${dt?.('generico.white')};
      --mi6-ovl-radius: 8px;
      --mi6-ovl-padding: 16px;
      --mi6-ovl-shadow: 0 18px 40px rgba(0,0,0,.25), 0 2px 6px rgba(0,0,0,.12);
      --mi6-ovl-maxw-sm: 280px;
      --mi6-ovl-maxw-md: 420px;
      --mi6-ovl-maxw-lg: 560px;
      --mi6-ovl-edge-gap: 16px;
    }

    /* Tooltip (simple) */
    .p-tooltip.mi6-tooltip{ z-index: var(--mi6-ovl-z); pointer-events:none; }
    .p-tooltip.mi6-tooltip .p-tooltip-text{
      background: var(--mi6-ovl-bg);
      color: var(--mi6-ovl-fg);
      border-radius: var(--mi6-ovl-radius);
      padding: var(--mi6-ovl-padding);
      box-shadow: var(--mi6-ovl-shadow);
      max-width: var(--mi6-ovl-maxw-md);
      line-height: 1.4; font-size: 12px; font-weight: 400;
      border: 1px solid var(--mi6-ovl-bg);
      -webkit-background-clip: padding-box; background-clip: padding-box;
    }
    .p-tooltip.mi6-tooltip .p-tooltip-arrow{ width:0;height:0;border-style:solid; }
    .p-tooltip.mi6-tooltip.p-tooltip-top .p-tooltip-arrow{
      border-width:8px 8px 0 8px; border-color:var(--mi6-ovl-bg) transparent transparent transparent; bottom:-2px;
    }
    .p-tooltip.mi6-tooltip.p-tooltip-bottom .p-tooltip-arrow{
      border-width:0 8px 8px 8px; border-color:transparent transparent var(--mi6-ovl-bg) transparent; top:-2px;
    }
    .p-tooltip.mi6-tooltip.p-tooltip-right .p-tooltip-arrow{
      border-width:8px 8px 8px 0; border-color:transparent var(--mi6-ovl-bg) transparent transparent; left:-2px;
    }
    .p-tooltip.mi6-tooltip.p-tooltip-left .p-tooltip-arrow{
      border-width:8px 0 8px 8px; border-color:transparent transparent transparent var(--mi6-ovl-bg); right:-2px;
    }

    /* Popover */
    .p-popover.mi6-ovl{
      --p-popover-background: var(--mi6-ovl-bg);
      --p-popover-color: var(--mi6-ovl-fg);
      --p-popover-border-color: var(--mi6-ovl-bg);
      --p-popover-border-radius: var(--mi6-ovl-radius);
      --p-popover-shadow: var(--mi6-ovl-shadow);
      --p-popover-content-padding: var(--mi6-ovl-padding);
      --p-popover-gutter: 8px;

      z-index: var(--mi6-ovl-z);
      max-width: var(--mi6-ovl-maxw-md);
      background-clip: padding-box;
    }

    /* Tamaños */
    .mi6-ovl.sm{ max-width: var(--mi6-ovl-maxw-sm); --p-popover-content-padding: 12px; }
    .mi6-ovl.md{ max-width: var(--mi6-ovl-maxw-md); }
    .mi6-ovl.lg{ max-width: var(--mi6-ovl-maxw-lg); --p-popover-content-padding: 20px; }

    .p-popover.mi6-ovl.p-popover-top   .p-popover-arrow,
    .p-popover.mi6-ovl.p-popover-bottom .p-popover-arrow{ left:50%; transform:translateX(-50%); }
    .p-popover.mi6-ovl.p-popover-left  .p-popover-arrow,
    .p-popover.mi6-ovl.p-popover-right .p-popover-arrow{ top:50%;  transform:translateY(-50%); }

    /* first/last en horizontal */
    .p-popover.mi6-ovl[data-pointer="first"].p-popover-top .p-popover-arrow,
    .p-popover.mi6-ovl[data-pointer="first"].p-popover-bottom .p-popover-arrow{ left: var(--mi6-ovl-edge-gap); transform:none; }

    .p-popover.mi6-ovl[data-pointer="last"].p-popover-top .p-popover-arrow,
    .p-popover.mi6-ovl[data-pointer="last"].p-popover-bottom .p-popover-arrow{ left:auto; right: var(--mi6-ovl-edge-gap); transform:none; }

    /* first/last en vertical */
    .p-popover.mi6-ovl[data-pointer="first"].p-popover-left .p-popover-arrow,
    .p-popover.mi6-ovl[data-pointer="first"].p-popover-right .p-popover-arrow{ top: var(--mi6-ovl-edge-gap); transform:none; }

    .p-popover.mi6-ovl[data-pointer="last"].p-popover-left .p-popover-arrow,
    .p-popover.mi6-ovl[data-pointer="last"].p-popover-right .p-popover-arrow{ top:auto; bottom: var(--mi6-ovl-edge-gap); transform:none; }

    /* Texto y close */
    .mi6-ovl-title{ font-size:12px; font-weight:700; margin:0 28px 4px 0; color: var(--mi6-ovl-fg); }
    .mi6-ovl-desc{  font-size:12px; font-weight:400; margin:0; color: var(--mi6-ovl-fg); }
    .mi6-ovl-close{
      position:absolute; top:12px; right:12px; width:18px; height:18px;
      display:inline-flex; align-items:center; justify-content:center;
      background:transparent; border:0; color: var(--mi6-ovl-fg); border-radius:2px; cursor:pointer;
    }
    .p-tooltip, .p-popover{ z-index: var(--mi6-ovl-z); }
    `
};

export default tooltip;
