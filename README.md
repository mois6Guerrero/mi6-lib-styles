# MI6 Angular Libraries - PrimeNG Configuration

Esta librería proporciona una configuración completa de PrimeNG para proyectos Angular con temas personalizados y servicios de gestión de temas.

## Instalación

```bash
npm install primeng primeicons
```

## Configuración

### 1. Importar estilos en angular.json

```json
{
  "projects": {
    "your-app": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "node_modules/primeng/resources/themes/lara-light-blue/theme.css",
              "node_modules/primeng/resources/primeng.css",
              "node_modules/primeicons/primeicons.css",
            ]
          }
        }
      }
    }
  }
}
```

### 2. Importar los servicios necesarios

```typescript
import { Component, inject } from '@angular/core';
import { Mi6ThemeService } from 'mi6-styles';

@Component({
  selector: 'app-example',
  template: '<div>Ejemplo con MI6 Styles</div>'
})
export class ExampleComponent {
  protected readonly themeService = inject(Mi6ThemeService);
}
```

### 3. Usar el servicio de temas

```typescript
import { Component, inject } from '@angular/core';
import { Mi6ThemeService } from 'mi6-styles';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <button (click)="themeService.toggleTheme()">
        {{ themeService.isDarkMode() ? 'Modo Claro' : 'Modo Oscuro' }}
      </button>
      
      <p-button label="Botón Primario" />
      <p-button label="Botón Secundario" severity="secondary" />
    </div>
  `
})
export class AppComponent {
  protected readonly themeService = inject(Mi6ThemeService);
}
```

## Características

### 🎨 Temas Predefinidos
- **Tema Claro**: Colores Material Design optimizados
- **Tema Oscuro**: Paleta de colores adaptada para modo oscuro
- **Temas Personalizados**: Crear y aplicar temas personalizados

### 🔧 Servicios
- **Mi6ThemeService**: Gestión reactiva de temas con Signals
- **Persistencia**: Los temas se guardan automáticamente en localStorage
- **Detección del sistema**: Respeta las preferencias del sistema operativo

### 🎯 Componentes PrimeNG
Todos los componentes de PrimeNG están disponibles y configurados con:
- Estilos personalizados MI6
- Variables CSS para fácil personalización
- Clases de utilidad para espaciado, colores y efectos

## Variables CSS Disponibles

### Colores
```css
--mi6-primary-color: #1976d2;
--mi6-secondary-color: #424242;
--mi6-success-color: #4caf50;
--mi6-warning-color: #ff9800;
--mi6-error-color: #f44336;
--mi6-info-color: #2196f3;
```

### Superficies
```css
--mi6-surface-0: #ffffff;
--mi6-surface-50: #fafafa;
--mi6-surface-100: #f5f5f5;
/* ... más niveles */
```

### Espaciado
```css
--mi6-spacing-xs: 0.25rem;
--mi6-spacing-sm: 0.5rem;
--mi6-spacing-md: 1rem;
--mi6-spacing-lg: 1.5rem;
--mi6-spacing-xl: 2rem;
--mi6-spacing-xxl: 3rem;
```

### Bordes y Sombras
```css
--mi6-border-radius-sm: 0.25rem;
--mi6-border-radius-md: 0.5rem;
--mi6-border-radius-lg: 0.75rem;
--mi6-border-radius-xl: 1rem;

--mi6-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12);
--mi6-shadow-md: 0 3px 6px rgba(0, 0, 0, 0.16);
--mi6-shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.19);
--mi6-shadow-xl: 0 14px 28px rgba(0, 0, 0, 0.25);
```

## Clases de Utilidad

### Colores de Texto
```html
<span class="mi6-text-primary">Texto primario</span>
<span class="mi6-text-secondary">Texto secundario</span>
<span class="mi6-text-success">Texto de éxito</span>
<span class="mi6-text-warning">Texto de advertencia</span>
<span class="mi6-text-error">Texto de error</span>
<span class="mi6-text-info">Texto informativo</span>
```

### Colores de Fondo
```html
<div class="mi6-bg-primary">Fondo primario</div>
<div class="mi6-bg-secondary">Fondo secundario</div>
<div class="mi6-bg-success">Fondo de éxito</div>
<div class="mi6-bg-warning">Fondo de advertencia</div>
<div class="mi6-bg-error">Fondo de error</div>
<div class="mi6-bg-info">Fondo informativo</div>
```

### Espaciado
```html
<div class="mi6-p-md">Padding medio</div>
<div class="mi6-m-lg">Margen grande</div>
```

### Bordes Redondeados
```html
<div class="mi6-rounded-md">Bordes redondeados</div>
```

### Sombras
```html
<div class="mi6-shadow-lg">Sombra grande</div>
```

## API del Servicio de Temas

### Métodos Principales
```typescript
// Cambiar a tema claro
themeService.switchToLightTheme();

// Cambiar a tema oscuro
themeService.switchToDarkTheme();

// Alternar entre temas
themeService.toggleTheme();

// Aplicar tema personalizado
themeService.applyCustomTheme(customTheme);

// Actualizar color específico
themeService.updateColor('primary', '#ff0000');

// Resetear a tema por defecto
themeService.resetToDefault();
```

### Signals Reactivos
```typescript
// Estado del tema actual
themeService.currentTheme(); // Mi6Theme

// Modo oscuro activo
themeService.isDarkMode(); // boolean

// Colores específicos
themeService.primaryColor(); // string
themeService.secondaryColor(); // string
themeService.successColor(); // string
themeService.warningColor(); // string
themeService.errorColor(); // string
themeService.infoColor(); // string
```

## Ejemplos de Uso

### Componente con Cambio de Tema
```typescript
import { Component, inject } from '@angular/core';
import { Mi6ThemeService } from 'mi6-styles';

@Component({
  selector: 'app-theme-toggle',
  template: `
    <div class="theme-controls">
      <p-button 
        [label]="themeService.isDarkMode() ? 'Modo Claro' : 'Modo Oscuro'"
        (onClick)="themeService.toggleTheme()"
        icon="pi pi-sun"
        severity="secondary"
      />
      
      <p-button 
        label="Resetear"
        (onClick)="themeService.resetToDefault()"
        icon="pi pi-refresh"
        severity="help"
      />
    </div>
  `
})
export class ThemeToggleComponent {
  protected readonly themeService = inject(Mi6ThemeService);
}
```

### Personalización de Colores
```typescript
import { Component, inject } from '@angular/core';
import { Mi6ThemeService } from 'mi6-styles';

@Component({
  selector: 'app-color-picker',
  template: `
    <div class="color-controls">
      <p-colorPicker 
        [(ngModel)]="primaryColor"
        (onChange)="updatePrimaryColor($event)"
      />
      <label>Color Primario</label>
    </div>
  `
})
export class ColorPickerComponent {
  protected readonly themeService = inject(Mi6ThemeService);
  primaryColor = this.themeService.primaryColor();

  updatePrimaryColor(event: any) {
    this.themeService.updateColor('primary', event.value);
  }
}
```

## Soporte

Para más información sobre PrimeNG, consulta la [documentación oficial](https://primeng.org/).

Para temas personalizados y configuración avanzada, revisa los archivos de configuración en `projects/mi6-styles/src/lib/`.