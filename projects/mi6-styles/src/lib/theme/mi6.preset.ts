import { definePreset } from '@primeuix/themes';
import Material from '@primeuix/themes/material';

import dialog from './components/dialog';
import datepicker from './components/datepicker';
import multiselect from './components/multiselect';
import select from './components/select';
import datatable from './components/datatable';
import primitive from './mi6-base-presets/mi6.primitive';
import semantic from './mi6-base-presets/mi6.semantic';
import accordion from './components/accordion';
import scrollpanel from './components/scrollpanel';
import badge from './components/badge';
import tag from './components/tag';
import paginator from './components/paginator';
import breadcrumb from './components/breadcrumb';
import chip from './components/chip';
import progressspinner from './components/progressspinner';
import button from './components/button';
import tooltip from './components/tooltip';
import tabs from './components/tabs';
import avatar from './components/avatar';
import message from './components/message';
import inputtext from './components/inputtext';
import inputgroup from './components/inputgroup';
import inputnumber from './components/inputnumber';
import textarea from './components/textarea';
import card from './components/card';
import stepper from './components/stepper';
import fileupload from './components/fileupload';
import menubarVertical from './components/menubar-vertical';
import megamenuHorizontal from './components/megamenu-horizontal';
import panelMenu from './components/panel-menu';
import selectbutton from './components/selectbutton';
import splitbutton from './components/splitbutton';
import checkbox from './components/checkbox';
import radiobutton from './components/radiobutton';
import toggleswitch from './components/toggleswitch';

// Preset DIAN basado en Material
const DianPreset = definePreset(
  Material,
  {
    // 1) Primitive tokens: reasignamos familias de color
    primitive,
    // 2) tokens semanticos para theme 
    semantic,
    // 3) definiciones por com  ponente (si es necesario)
    components: {
      dialog,
      datepicker,
      accordion,
      scrollpanel,
      paginator,
      multiselect,
      select,
      datatable,
      badge,
      tag,
      breadcrumb,
      chip,
      progressspinner,
      button,
      tooltip,
      stepper,
      avatar,
      message,
      inputtext,
      inputgroup,
      inputnumber,
      textarea,
      card,
      tabs,
      selectbutton,
      splitbutton,
      checkbox,
      radiobutton,
      toggleswitch,
      fileupload,
      menubar: menubarVertical,
      megamenu: megamenuHorizontal,
      panelmenu: panelMenu
    }
  }

  /*
  * Nota: no es necesario sobreescribir tokens de cada componente;
  * Material ya mapea severities (primary/secondary/success/info/warn/danger/contrast)
  * a familias primitivas. Al cambiar primitives arriba, todo se alinea.
  */
);

export default DianPreset;
