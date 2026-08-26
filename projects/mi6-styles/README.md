# MI6 Angular Libraries - PrimeNG Configuration

Esta librería proporciona una configuración completa de PrimeNG para proyectos Angular con temas personalizados MI6.

Incluye:

- Preset de tema PrimeNG (`Mi6Preset` / `Mi6ThemeConfig`)
- Hoja de estilos CSS basada en **Tailwind CSS v4** (utilidades MI6, tipografía, layout)
- Integración con `tailwindcss-primeui` y `primeicons`
- Tokens de color (`MI6_COLORS`)

## Requisitos

| Paquete | Versión |
| --- | --- |
| Angular | `^21.0.0` |
| PrimeNG | `^21.0.1` |
| Tailwind CSS | `^4.0.0` |
| `tailwindcss-primeui` | `^0.6.0` |
| `@tailwindcss/postcss` | `^4.0.0` |
| `postcss` | `^8.5.0` |
| `primeicons` | `^7.0.0` |

## Instalación

### 1. Instalar dependencias

```bash
npm install @mi6-colombia/mi6-styles primeng primeicons tailwindcss-primeui
npm install -D tailwindcss @tailwindcss/postcss postcss
```

### 2. Configurar PostCSS (obligatorio)

Crea `postcss.config.json` en la raíz del proyecto consumidor:

```json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

Sin este archivo, Angular no procesa `@import "tailwindcss"`, `@theme`, `@utility` ni `@apply` que trae la librería.

### 3. Registrar estilos en `angular.json`

**No** importes `@mi6-colombia/mi6-styles/styles` desde un archivo Sass (`.scss`). Esa hoja es CSS de Tailwind y debe cargarse como entrada CSS para que PostCSS la resuelva.

```json
{
  "projects": {
    "your-app": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "node_modules/@mi6-colombia/mi6-styles/src/styles/index.css",
              "src/styles.scss"
            ]
          }
        }
      }
    }
  }
}
```

- La primera entrada carga Tailwind + utilidades MI6 + `primeicons`.
- `src/styles.scss` queda libre para estilos globales propios en Sass.

### 4. Sass en el proyecto consumidor

Sass **sigue funcionando** con normalidad:

- Componentes con `*.component.scss`
- `inlineStyleLanguage: "scss"` en `angular.json`
- Variables/mixins en tu propio `styles.scss`

Lo que **no** debes hacer:

```scss
/* Incorrecto: Sass @import de la hoja Tailwind de mi6-styles */
@import '@mi6-colombia/mi6-styles/styles';
```

Eso genera:

1. Warning de deprecación de Sass (`@import`)
2. Error `Could not resolve "tailwindcss"` / `tailwindcss-primeui`

### Alternativa con CSS global

Si prefieres un único archivo CSS global:

```css
/* src/styles.css */
@import '@mi6-colombia/mi6-styles/styles';
```

Y en `angular.json`:

```json
"styles": ["src/styles.css"]
```

En ese caso también necesitas `postcss.config.json` y las dependencias de Tailwind.

## Configuración del tema PrimeNG

### 1. Registrar `providePrimeNG`

En `app.config.ts` (o providers de la app):

```typescript
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { Mi6ThemeConfig } from '@mi6-colombia/mi6-styles';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG(Mi6ThemeConfig),
  ],
};
```

### 2. Usar el preset directamente (opcional)

```typescript
import { Mi6Preset } from '@mi6-colombia/mi6-styles';

providePrimeNG({
  theme: {
    preset: Mi6Preset,
    options: {
      darkModeSelector: '[data-theme="ligth"]',
      cssLayer: {
        name: 'primeng',
        order: 'theme, base, primeng',
      },
    },
  },
});
```

### 3. Ejemplo en un componente

```typescript
import { Component } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [Button],
  template: `
    <div class="mi6-content">
      <h2 class="mi6-title">Ejemplo MI6 Styles</h2>
      <p-button label="Botón Primario" />
      <p-button label="Botón Secundario" severity="secondary" />
    </div>
  `,
})
export class AppComponent {}
```

## Características

### Temas Predefinidos

- **Tema Claro**: Paleta MI6 definida en `MI6_COLORS` y el preset PrimeNG
- **Modo oscuro**: Configurable vía `darkModeSelector` en `Mi6ThemeConfig`
- **Temas personalizados**: Extiende `Mi6Preset` o sobrescribe tokens del tema

### Configuración de tema

- **`Mi6Preset`**: Preset PrimeNG con tokens MI6 (componentes, semánticos, primitivos)
- **`Mi6ThemeConfig`**: Configuración lista para `providePrimeNG(...)`
- **`MI6_COLORS`**: Paletas centralizadas (primary, secondary, success, warning, error, etc.)

### Componentes PrimeNG

Los componentes de PrimeNG quedan disponibles y configurados con:

- Estilos personalizados MI6 (tokens por componente)
- Variables CSS para personalización
- Clases de utilidad MI6 / Tailwind para layout, formularios y cards

## Tokens de color (`MI6_COLORS`)

Paletas exportadas desde `@mi6-colombia/mi6-styles`:

```typescript
import { MI6_COLORS } from '@mi6-colombia/mi6-styles';

// Ejemplos
MI6_COLORS.primary[500];      // #00C25A
MI6_COLORS.secondary[900];    // #2B2D45
MI6_COLORS.tertiary[500];     // #39B7D9
MI6_COLORS.neutralBlue[300];  // #DCE2E8
MI6_COLORS.success[500];
MI6_COLORS.warning[500];
MI6_COLORS.error[500];
```

Escalas disponibles (50–900): `primary`, `secondary`, `tertiary`, `neutralBlue`, `neutralGray`, `success`, `warning`, `error`, e info según `mi6.variables.ts`.

## Variables CSS disponibles

### Shell / layout

```css
--mi6-shell-background: #39b7d9;
--mi6-shell-text: #2b2d45;
```

### Tema Tailwind (`@theme`)

```css
--font-sans: "WorkSans", "Ubuntu", "Helvetica Neue", system-ui, ...;
--color-app-bg: white;
--spacing-mi6-gap: 1rem;
```

### Componentes (ejemplos)

```css
--mi6-focus-shadow: /* sombra de focus del tema */;
--mi6-button-radius: 4px;

/* Overlay / tooltip */
--mi6-ovl-z: 1005;
--mi6-ovl-bg: ...;
--mi6-ovl-fg: ...;
--mi6-ovl-radius: 8px;
--mi6-ovl-padding: 16px;
--mi6-ovl-shadow: ...;
```

Además, PrimeNG expone sus propios tokens CSS (`--p-*`) según el preset MI6.

## Clases de utilidad

Las utilidades MI6 se definen con `@utility` (Tailwind v4) en `src/styles/index.css`.

### Layout y estructura

```html
<div class="mi6-flex-wrapper">
  <div class="mi6-content">
    <h2 class="mi6-title">Título</h2>
    <div class="mi6-border-wrapper">...</div>
    <div class="mi6-row">...</div>
  </div>
</div>
```

| Clase | Uso |
| --- | --- |
| `mi6-flex-wrapper` | Layout responsive (columna → fila en `md`) |
| `mi6-content` | Contenedor de contenido en columna |
| `mi6-border-wrapper` | Contenedor con borde |
| `mi6-row` | Fila flex |
| `mi6-title` | Título base |

### Formularios

```html
<form class="mi6-form">
  <div class="mi6-form-grid">
    <div class="mi6-form-group">...</div>
    <div class="mi6-form-group-full">...</div>
  </div>
  <div class="mi6-form-row">...</div>
  <div class="mi6-form-actions">...</div>
</form>
```

| Clase | Uso |
| --- | --- |
| `mi6-form` | Contenedor de formulario |
| `mi6-form-grid` | Grid responsive de campos |
| `mi6-form-row` | Fila de campos |
| `mi6-form-group` / `mi6-form-group-full` | Grupo de campo |
| `mi6-form-actions` | Acciones (botones a ancho completo) |
| `label-required` | Indicador de campo requerido |

### Cards, tablas y otros

```html
<div class="mi6-card-wrapper">
  <div class="mi6-card-content">...</div>
</div>

<div class="mi6-spinner-container">
  <div class="mi6-spinner-size">...</div>
</div>

<div class="mi6-table">...</div>
<nav class="mi6-bread-crum">...</nav>
```

También puedes usar utilidades estándar de Tailwind (`flex`, `gap-3`, `w-full`, `text-red-500`, etc.) en los templates.

## API pública

```typescript
import {
  Mi6Preset,
  Mi6ThemeConfig,
  MI6_COLORS,
} from '@mi6-colombia/mi6-styles';
```

| Export | Descripción |
| --- | --- |
| `Mi6Preset` | Preset PrimeNG MI6 |
| `Mi6ThemeConfig` | Config lista para `providePrimeNG(...)` |
| `MI6_COLORS` | Tokens de color del tema |

Export de estilos:

| Path | Archivo |
| --- | --- |
| `@mi6-colombia/mi6-styles/styles` | `src/styles/index.css` |

## Checklist rápido de integración

1. [ ] `npm install` de la librería + peers (`primeng`, `primeicons`, `tailwindcss`, `tailwindcss-primeui`)
2. [ ] DevDeps: `@tailwindcss/postcss`, `postcss`
3. [ ] `postcss.config.json` con `@tailwindcss/postcss`
4. [ ] Estilos MI6 en `angular.json` (entrada CSS), no vía Sass `@import`
5. [ ] `providePrimeNG(Mi6ThemeConfig)` en providers
6. [ ] `ng serve` / `ng build` sin errores de resolución de `tailwindcss`

## Troubleshooting

### `Could not resolve "tailwindcss"`

Falta instalar `tailwindcss` y/o configurar `postcss.config.json`. También ocurre si importas la hoja desde Sass en lugar de `angular.json`.

### Warning Sass: `@import` rules are deprecated

Estás importando la hoja MI6 desde `.scss`. Muévela a `angular.json` (CSS) y deja Sass solo para estilos propios.

### Las utilidades MI6 no se ven aplicadas

Confirma que:

1. La entrada CSS de `mi6-styles` está en `angular.json`
2. Existe `postcss.config.json`
3. Reiniciaste `ng serve` tras crear PostCSS

## Soporte

Para más información sobre PrimeNG, consulta la [documentación oficial](https://primeng.org/).

Para Tailwind CSS v4: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

Para temas personalizados y configuración avanzada, revisa los archivos en `projects/mi6-styles/src/lib/theme/`.
