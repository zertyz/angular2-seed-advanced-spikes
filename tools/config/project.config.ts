import { join } from 'path';
import { SeedAdvancedConfig } from './seed-advanced.config';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedAdvancedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    this.APP_TITLE = 'My Own Spikes...';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: `${this.PROJECT_ROOT}/node_modules/d3/d3.js`,             inject: 'libs'},
      // {src: `${this.PROJECT_ROOT}/node_modules/nvd3/build/nv.d3.css`, inject: true},
      // {src: `${this.PROJECT_ROOT}/node_modules/nvd3/build/nv.d3.js`,  inject: 'libs'},
      {src: 'd3/d3.js',             inject: true},
      {src: 'nvd3/build/nv.d3.css', inject: true},
      {src: 'nvd3/build/nv.d3.js',  inject: true},

    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      ...this.APP_ASSETS,
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
      // {src: `${this.PROJECT_ROOT}/node_modules/d3/d3.js`,             inject: true},
      // {src: `${this.PROJECT_ROOT}/node_modules/nvd3/build/nv.d3.css`, inject: true},
      // {src: `${this.PROJECT_ROOT}/node_modules/nvd3/build/nv.d3.js`,  inject: true},
    ];

    /* Add to or override NPM module configurations: */
    // this.mergeObject(this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false });

    // ng2-nvd3 module configuration
    this.SYSTEM_CONFIG_DEV.paths['ng2-nvd3/*']      = `${this.APP_BASE}node_modules/ng2-nvd3/build/lib/*`;
    this.SYSTEM_CONFIG    .paths['ng2-nvd3']      = `${this.APP_BASE}node_modules/ng2-nvd3/build/lib/ng2-nvd3.js`;  // needed when this.TARGET_DESKTOP == true (doesn't work for  or this.TARGET_MOBILE_HYBRID)
    this.SYSTEM_BUILDER_CONFIG.packages['ng2-nvd3'] = {main: 'ng2-nvd3aa.js', defaultExtension : 'js'};
    this.SYSTEM_BUILDER_CONFIG.paths['ng2-nvd3/*']  = `${this.APP_BASE}node_modules/ng2-nvd3/build/lib/*`;

    // if (this.TARGET_DESKTOP) {
    // }
  }

}
