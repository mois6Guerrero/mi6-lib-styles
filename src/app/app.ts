/* eslint-disable no-console */

import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Mi6ThemeConfig } from '../../projects/mi6-styles/src/public-api';
import Material from '@primeuix/themes/material';

// PrimeNG Modules
import { AccordionModule } from 'primeng/accordion';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { DatePickerModule } from 'primeng/datepicker';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
// IftaLabelModule - No existe en PrimeNG v21, usar FloatLabelModule o IftaLabel component si está disponible
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputOtpModule } from 'primeng/inputotp';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { PanelModule } from 'primeng/panel';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SelectModule } from 'primeng/select';
import { StepperModule } from 'primeng/stepper';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TabsModule } from 'primeng/tabs';
import { TextareaModule } from 'primeng/textarea';
import { TooltipModule } from 'primeng/tooltip';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';
 
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormsModule,
    RouterLink,
    //PrimeNG
    CardModule,
    CheckboxModule,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    AccordionModule,
    DialogModule,
    DatePickerModule,
    CascadeSelectModule,
    SelectModule,
    TableModule,
    ChipModule,
    BadgeModule,
    OverlayBadgeModule,
    TagModule,
    CommonModule,
    PanelModule,
    ScrollPanelModule,
    TooltipModule,
    ButtonModule,
    MenuModule,
    FloatLabelModule,
    // IftaLabelModule - No disponible en PrimeNG v21
    InputNumberModule,
    RadioButtonModule,
    AccordionModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    PanelModule,
    InputMaskModule,
    InputOtpModule,
    TextareaModule,
    StepperModule,
    TabsModule,
    PanelMenuModule
    
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('MI6-Components-Demo-App');
  protected checked = signal(false);
  protected value = signal('');
  protected testVar = 'Distintivo';

 
  public activeStep = 1;
  public tabs = [
    { value: 1, title: 'Content I', content: 'contenido 1' },
    { value: 2, title: 'Content II', content: 'contenido 2' },
    { value: 3, title: 'Content III', content: 'contenido 3' }
  ];

  public tabsMenu = [
    { route: 'dashboard', label: 'Dashboard', icon: 'pi pi-home' },
    { route: 'transactions', label: 'Transactions', icon: 'pi pi-chart-line' },
    { route: 'products', label: 'Products', icon: 'pi pi-list' },
    { route: 'messages', label: 'Messages', icon: 'pi pi-inbox' }
  ];

  public selectedCity = 'NY';
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];
  items = [{ label: 'Web Search' }, { label: 'AI Assistant' }, { label: 'History' }];
  items2: MenuItem[] = [];
  price = 100;
  defaultValue = '';
  defaultBoolean = false;
  numeroCelular = '';

  password = 'seguridadAlte%67/4';
  mostrarPassword = false;
  passwordStrength = 70;
  colorBarra = '#d1d5db';
  textoSeguridad = '';

  evaluarSeguridadPassword() {
    const pass = this.password || '';
    let puntos = 0;

    if (pass.length >= 8) { puntos += 25; }
    if (/[A-Z]/.test(pass)) { puntos += 25; }
    if (/[0-9]/.test(pass)) { puntos += 25; }
    if (/[^A-Za-z0-9]/.test(pass)) { puntos += 25; }

    this.passwordStrength = puntos;

    if (puntos <= 25) {
      this.colorBarra = '#ef4444'; // rojo
      this.textoSeguridad = 'Débil';
    } else if (puntos <= 50) {
      this.colorBarra = '#f97316'; // naranja
      this.textoSeguridad = 'Media';
    } else if (puntos <= 75) {
      this.colorBarra = '#facc15'; // amarillo
      this.textoSeguridad = 'Buena';
    } else {
      this.colorBarra = '#10b981'; // verde
      this.textoSeguridad = 'Fuerte';
    }
  }


  ngOnInit() {
    this.showConfigTheme();
    // se muestran los datos de presets para comparar y verificar errores 
    console.log('Mi6Preset', Mi6ThemeConfig.theme.preset);
    console.log('Material', Material);
    this.items2 = this.menu;
  }

  private showConfigTheme() {
    try {
      console.log('Preset configurado:', Mi6ThemeConfig.theme.preset);
      console.log('Nota: Implementar aplicación del preset con PrimeNGConfig');
      console.log('Opciones del tema:', Mi6ThemeConfig.theme.options);
    } catch (error) {
      console.error('Error configurando preset:', error);
    }
  }

  onSelect() {
    console.log('Card seleccionada');
  }

  //isSubitemVisible(item, menuType){
  //  return item.expanded;
  // }

  menu: MenuItem[] =
    [
      {
        'label': 'Dashboard',
        'icon': 'pi pi-home',
        'items': [
          {
            'label': 'Mis Alertas',
            'icon': 'pi pi-exclamation-triangle',
            'items': [
              {
                'label': 'Alertas de Vencimiento',
                'icon': 'pi pi-clock',
                'routerLink': 'dashboard/alertas/vencimientos'
              },
              {
                'label': 'Alertas de Sistema',
                'icon': 'pi pi-desktop',
                'routerLink': 'dashboard/alertas/sistema'
              }
            ]
          },
          {
            'label': 'Calendario Tributario',
            'icon': 'pi pi-calendar',
            'items': [
              {
                'label': 'Vencimientos Nacionales',
                'icon': 'pi pi-flag',
                'routerLink': 'dashboard/calendario/nacionales'
              },
              {
                'label': 'Vencimientos Territoriales',
                'icon': 'pi pi-map-marker',
                'routerLink': 'dashboard/calendario/territoriales'
              }
            ]
          }
        ],
        'expanded': false
      },
      {
        'label': 'Mis Trámites',
        'icon': 'pi pi-file',
        'items': [
          {
            'label': 'Presentar Declaraciones',
            'icon': 'pi pi-upload',
            'items': [
              {
                'label': 'Declaración de Renta',
                'icon': 'pi pi-file-edit',
                'routerLink': 'tramites/declaraciones/presentar/renta'
              },
              {
                'label': 'Declaración de IVA',
                'icon': 'pi pi-percentage',
                'routerLink': 'tramites/declaraciones/presentar/iva'
              }
            ]
          },
          {
            'label': 'Consultar Obligaciones',
            'icon': 'pi pi-list',
            'items': [
              {
                'label': 'Obligaciones Vigentes',
                'icon': 'pi pi-calendar-plus',
                'routerLink': 'tramites/obligaciones/vigentes'
              },
              {
                'label': 'Histórico de Obligaciones',
                'icon': 'pi pi-history',
                'routerLink': 'tramites/obligaciones/historico'
              }
            ]
          },
          {
            'label': 'Realizar Pagos',
            'icon': 'pi pi-credit-card',
            'items': [
              {
                'label': 'Pago en Línea (PSE)',
                'icon': 'pi pi-desktop',
                'routerLink': 'tramites/pagos/pse'
              },
              {
                'label': 'Generar Recibo Físico',
                'icon': 'pi pi-print',
                'routerLink': 'tramites/pagos/recibo'
              }
            ]
          }
        ]
      },
      {
        'label': 'Facturación Electrónica',
        'icon': 'pi pi-qrcode',
        'items': [
          {
            'label': 'Habilitación',
            'icon': 'pi pi-check-circle',
            'items': [
              {
                'label': 'Set de Pruebas',
                'icon': 'pi pi-wrench',
                'routerLink': 'facturacion/habilitacion/pruebas'
              },
              {
                'label': 'Resolución de Habilitación',
                'icon': 'pi pi-verified',
                'routerLink': 'facturacion/habilitacion/resolucion'
              }
            ]
          },
          {
            'label': 'Documentos Enviados',
            'icon': 'pi pi-arrow-up',
            'items': [
              {
                'label': 'Facturas Electrónicas',
                'icon': 'pi pi-file-export',
                'routerLink': 'facturacion/documentos/enviados/facturas'
              },
              {
                'label': 'Notas Crédito y Débito',
                'icon': 'pi pi-sync',
                'routerLink': 'facturacion/documentos/enviados/notas'
              }
            ]
          },
          {
            'label': 'Documentos Recibidos',
            'icon': 'pi pi-arrow-down',
            'items': [
              {
                'label': 'Eventos y Acuses',
                'icon': 'pi pi-check-square',
                'routerLink': 'facturacion/documentos/recibidos/eventos'
              },
              {
                'label': 'Reclamos',
                'icon': 'pi pi-times-circle',
                'routerLink': 'facturacion/documentos/recibidos/reclamos'
              }
            ]
          },
          {
            'label': 'Registro de Software',
            'icon': 'pi pi-cog',
            'items': [
              {
                'label': 'Software Propio',
                'icon': 'pi pi-code',
                'routerLink': 'facturacion/software/propio'
              },
              {
                'label': 'Proveedor Tecnológico',
                'icon': 'pi pi-building',
                'routerLink': 'facturacion/software/proveedor'
              }
            ]
          }
        ]
      },
      {
        'label': 'Consultas y Certificados',
        'icon': 'pi pi-search',
        'items': [
          {
            'label': 'Consulta de RUT',
            'icon': 'pi pi-id-card',
            'items': [
              {
                'label': 'Descargar Copia RUT',
                'icon': 'pi pi-download',
                'routerLink': 'consultas/rut/descargar'
              },
              {
                'label': 'Histórico de Actualizaciones',
                'icon': 'pi pi-list',
                'routerLink': 'consultas/rut/historico'
              }
            ]
          },
          {
            'label': 'Estado de Cuenta',
            'icon': 'pi pi-wallet',
            'items': [
              {
                'label': 'Saldos a Favor',
                'icon': 'pi pi-plus-circle',
                'routerLink': 'consultas/estado-cuenta/saldos'
              },
              {
                'label': 'Cálculo de Intereses',
                'icon': 'pi pi-chart-line',
                'routerLink': 'consultas/estado-cuenta/intereses'
              }
            ]
          },
          {
            'label': 'Certificado de Deudas',
            'icon': 'pi pi-receipt',
            'items': [
              {
                'label': 'Paz y Salvo',
                'icon': 'pi pi-thumbs-up',
                'routerLink': 'consultas/certificados/deudas/paz-salvo'
              },
              {
                'label': 'Certificado con Pendientes',
                'icon': 'pi pi-exclamation-circle',
                'routerLink': 'consultas/certificados/deudas/pendientes'
              }
            ]
          }
        ]
      },
      {
        'label': 'Mi Perfil',
        'icon': 'pi pi-user-edit',
        'items': [
          {
            'label': 'Actualizar Datos',
            'icon': 'pi pi-user-edit',
            'items': [
              {
                'label': 'Datos de Contacto',
                'icon': 'pi pi-phone',
                'routerLink': 'perfil/actualizar-datos/contacto'
              },
              {
                'label': 'Actividad Económica',
                'icon': 'pi pi-briefcase',
                'routerLink': 'perfil/actualizar-datos/actividad'
              }
            ]
          },
          {
            'label': 'Cambiar Contraseña',
            'icon': 'pi pi-key',
            'items': [
              {
                'label': 'Preguntas de Seguridad',
                'icon': 'pi pi-question-circle',
                'routerLink': 'perfil/seguridad/preguntas'
              },
              {
                'label': 'Autenticación de 2 Factores',
                'icon': 'pi pi-shield',
                'routerLink': 'perfil/security/2fa'
              }
            ]
          },
          {
            'label': 'Gestionar Notificaciones',
            'icon': 'pi pi-bell',
            'items': [
              {
                'label': 'Notificaciones al Correo',
                'icon': 'pi pi-envelope',
                'routerLink': 'perfil/notificaciones/correo'
              },
              {
                'label': 'Mensajes SMS',
                'icon': 'pi pi-mobile',
                'routerLink': 'perfil/notificaciones/sms'
              }
            ]
          }
        ]
      }
    ];


  menuType = signal<string>('collapsed');

  changeMenu = () => {
    this.menuType.set(this.menuType() === 'normal' ? 'collapsed' : 'normal');
  };

}
