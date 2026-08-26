const menubarVertical = {
  css: ({ dt }: { dt: (t: string) => string | number | undefined }) => `
    /* ===============================
       Tokens
    ================================ */
    :root {
      --ux-v-text: ${dt?.('secondary.900') ?? dt?.('text.color') ?? '#111827'};
      --ux-v-text-muted: ${dt?.('text.color.secondary') ?? '#6b7280'};
      --ux-v-accent: ${dt?.('tertiary.500') ?? '#39B7D6'};
      --ux-v-bg: ${dt?.('surface.0') ?? '#FFFFFF'};
      --ux-v-bg-hover: ${dt?.('neutralBlue.100') ?? '#EFF6FF'};
      --ux-v-bg-disabled: ${dt?.('neutralBlue.200') ?? '#E5EEF9'};
      --ux-v-bg-subitem: ${dt?.('neutralBlue.50') ?? '#F6F7F9'};
      --ux-v-border: ${dt?.('neutralBlue.300') ?? '#D5E2F1'};
    }

    /* ===============================
       Contenedor
    ================================ */
    .p-menubar.mi6-ux-menubar--vertical {
      background: transparent;
      border: 0;
      border-radius: 0;
      padding: 0;
      box-shadow: none;
      width: 320px;
    }
    .p-menubar.mi6-ux-menubar--vertical.is-collapsed { width: 90px; }

    .p-menubar.mi6-ux-menubar--vertical .p-menubar-button,
    .p-menubar.mi6-ux-menubar--vertical .p-menubar-start,
    .p-menubar.mi6-ux-menubar--vertical .p-menubar-end { display: none; }

    .p-menubar.mi6-ux-menubar--vertical .p-menubar-root-list {
      display: flex;
      flex-direction: column;
      gap: 0;
      padding: 0;
      margin: 0;
      background: transparent;
      border: 0;
    }

    .p-menubar.mi6-ux-menubar--vertical .p-menuitem,
    .p-menubar.mi6-ux-menubar--vertical .p-menubar-item { margin: 0; }

    .p-menubar.mi6-ux-menubar--vertical .p-menuitem-content {
      padding: 0;
      border: 0;
      background: transparent;
    }

    .p-menubar.mi6-ux-menubar--vertical a.p-menuitem-link,
    .p-menubar.mi6-ux-menubar--vertical a.p-menubar-item-link {
      padding: 0;
      background: none;
    }

    /* ===============================
       Item (90px) – Grid 90 | 1fr | 52
    ================================ */
    .p-menubar.mi6-ux-menubar--vertical .mi6-ux-vtile {
      position: relative;
      display: grid;
      grid-template-columns: 90px 1fr 52px;
      align-items: center;
      width: 294px;
      height: 90px;
      min-height: 90px;
      padding: 0;
      background: var(--ux-v-bg);
      color: var(--ux-v-text);
      text-decoration: none;
      border: 0;
      border-bottom: 1px solid var(--ux-v-border);
      transition: background-color .15s ease, color .15s ease, opacity .15s ease;
    }

    .p-menubar.mi6-ux-menubar--vertical .mi6-ux-vtile.is-collapsed {
      width: 90px;
      grid-template-columns: 90px;
      justify-items: center;
    }
    .p-menubar.mi6-ux-menubar--vertical .mi6-ux-vtile.is-collapsed .mi6-ux-vtext,
    .p-menubar.mi6-ux-menubar--vertical .mi6-ux-vtile.is-collapsed .mi6-ux-vaction { display: none; }

    /* ===============================
       Estados
    ================================ */
    .p-menubar.mi6-ux-menubar--vertical .mi6-ux-vtile:not(.is-disabled):not(.is-selected):hover,
    .p-menubar.mi6-ux-menubar--vertical .mi6-ux-vtile.hovered {
      background: var(--ux-v-bg-hover);
    }
    .p-menubar.mi6-ux-menubar--vertical .mi6-ux-vtile.is-selected {
      background: var(--ux-v-accent);
      color: var(--ux-v-text);
    }
    .p-menubar.mi6-ux-menubar--vertical .mi6-ux-vtile.is-disabled {
      background: var(--ux-v-bg-disabled);
      color: var(--ux-v-text-muted);
      opacity: 1;
      pointer-events: none;
    }

    /* ===============================
       Icono
    ================================ */
    .p-menubar.mi6-ux-menubar--vertical .mi6-ux-vicon {
      width: 90px;
      height: 90px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .p-menubar.mi6-ux-menubar--vertical .mi6-ux-vicon > i {
      font-size: 40px;
      line-height: 40px;
      color: var(--ux-v-accent);
    }
    .p-menubar.mi6-ux-menubar--vertical .mi6-ux-vtile.is-selected .mi6-ux-vicon > i,
    .p-menubar.mi6-ux-menubar--vertical .mi6-ux-vtile.is-selected .mi6-ux-vaction {
      color: ${dt?.('secondary.900') ?? '#0F172A'};
    }

    /* ===============================
       Texto
    ================================ */
    .p-menubar.mi6-ux-menubar--vertical .mi6-ux-vtile .mi6-ux-vtext {
      grid-column: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      overflow-wrap: anywhere;
      text-align: left;
      font-weight: 500;
      padding-right: 12px;
    }

    /* ===============================
       Acción
    ================================ */
    .p-menubar.mi6-ux-menubar--vertical .mi6-ux-vtile .mi6-ux-vaction {
      grid-column: 3;
      width: 52px;
      height: 90px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--ux-v-text-muted);
    }
    .p-menubar.mi6-ux-menubar--vertical .mi6-ux-vtile .mi6-ux-vaction > i {
      font-size: 16px;
      line-height: 20px;
    }

    /* ===============================
       Focus
    ================================ */
    .p-menubar.mi6-ux-menubar--vertical .mi6-ux-vtile:focus-visible {
      outline: 2px solid var(--ux-v-accent);
      outline-offset: 2px;
    }

    /* ===============================
       Espaciador
    ================================ */
    .p-menubar.mi6-ux-menubar--vertical .mi6-ux-vspacer {
      width: 294px;
      height: 40px;
      background: var(--ux-v-bg);
      border-bottom: 0;
    }
    .p-menubar.mi6-ux-menubar--vertical.is-collapsed .mi6-ux-vspacer {
      width: 90px;
      height: 90px;
    }

    /* ===============================
       Subitem (60px)
    ================================ */
    .p-menubar.mi6-ux-menubar--vertical .mi6-ux-vtile--sub {
      display: flex;
      align-items: center;
      width: 294px;
      height: 60px;
      min-height: 60px;
      padding: 0 30px;
      background: var(--ux-v-bg-subitem);
      border: 0;
      border-bottom: 1px solid var(--ux-v-border);
      color: var(--ux-v-text);
      text-decoration: none;
    }
    .p-menubar.mi6-ux-menubar--vertical .mi6-ux-vtile--sub:not(.is-disabled):not(.is-selected):hover,
    .p-menubar.mi6-ux-menubar--vertical .mi6-ux-vtile--sub.hovered { background: var(--ux-v-bg-hover); }
    .p-menubar.mi6-ux-menubar--vertical .mi6-ux-vtile--sub.is-selected { background: var(--ux-v-accent); }
    .p-menubar.mi6-ux-menubar--vertical .mi6-ux-vtile--sub.is-disabled {
      background: var(--ux-v-bg-disabled);
      color: var(--ux-v-text-muted);
      pointer-events: none;
    }

    /* ===============================
       Ajustes de grid por contenido
    ================================ */
    .p-menubar.mi6-ux-menubar--vertical .mi6-ux-vtile:not(:has(.mi6-ux-vicon)) .mi6-ux-vtext {
      grid-column: 1 / 3;
    }
    .p-menubar.mi6-ux-menubar--vertical .mi6-ux-vtile:not(:has(.mi6-ux-vaction)) .mi6-ux-vtext {
      grid-column: 2 / 4;
    }
    .p-menubar.mi6-ux-menubar--vertical .mi6-ux-vtile:not(:has(.mi6-ux-vicon)):not(:has(.mi6-ux-vaction)) .mi6-ux-vtext {
      grid-column: 1 / 4;
    }
  `
};

export default menubarVertical;
