import {provideRouter, RouterConfig} from '@angular/router';

import {AboutRoutes} from '../about/about.routes';
import {HomeRoutes} from '../home/home.routes';
import {GvHomeRoutes} from "../gv-home/gv-home.routes";

export const routes: RouterConfig = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...GvHomeRoutes,
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
