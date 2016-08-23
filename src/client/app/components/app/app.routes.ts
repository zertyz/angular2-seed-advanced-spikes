import {provideRouter, RouterConfig} from '@angular/router';

import {AboutRoutes} from '../about/about.routes';
import {HomeRoutes} from '../home/home.routes';

import {GvHomeRoutes}                   from "../pages/gv-home/gv-home.routes";
import {GvNovaContaRoutes}              from "../pages/gv-novaConta/gv-novaConta.routes";
import {GvMenuRoutes}                   from "../pages/gv-menu/gv-menu.routes";
import {GvConfirmaPedidosRoutes}        from "../pages/gv-confirmaPedidos/gv-confirmaPedidos.routes";
import {GvEdicaoRoutes}                 from "../pages/gv-edicao/gv-edicao.routes";
import {GvEfetivaPedidosRoutes}         from "../pages/gv-efetivaPedidos/gv-efetivaPedidos.routes";
import {GvContaParcialRoutes}           from "../pages/gv-contaParcial/gv-contaParcial.routes";
import {GvContaParcialIndividualRoutes} from "../pages/gv-contaParcialIndividual/gv-contaParcialIndividual.routes";
import {GvContaParcialMesaRoutes}       from "../pages/gv-contaParcialMesa/gv-contaParcialMesa.routes";
import {GvFormaDePagamentoRoutes}       from "../pages/gv-formaDePagamento/gv-formaDePagamento.routes";
import {GvPesquisaSatisfacaoRoutes}     from "../pages/gv-pesquisaSatisfacao/gv-pesquisaSatisfacao.routes";

export const routes: RouterConfig = [
  ...HomeRoutes,
  ...AboutRoutes,

  ...GvHomeRoutes,
  ...GvNovaContaRoutes,
  ...GvMenuRoutes,
  ...GvConfirmaPedidosRoutes,
  ...GvEdicaoRoutes,
  ...GvEfetivaPedidosRoutes,
  ...GvContaParcialRoutes,
  ...GvContaParcialIndividualRoutes,
  ...GvContaParcialMesaRoutes,
  ...GvFormaDePagamentoRoutes,
  ...GvPesquisaSatisfacaoRoutes,
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
