// libs
import {Store} from '@ngrx/store';

// app
import { BaseComponent, RouterExtensions } from '../../../frameworks/core/index';
import { NameListService } from '../../../frameworks/sample/index';

@BaseComponent({
  moduleId: module.id,
  selector: 'gv-efetivaPedidos',
  templateUrl: 'gv-efetivaPedidos.component.html',
  styleUrls: ['gv-efetivaPedidos.component.css']
})
export class GvEfetivaPedidosComponent {
  public newName: string = '';
  constructor(private store: Store<any>, public nameListService: NameListService, public routerext: RouterExtensions) {

  }

  gotoNext() {
    this.routerext.navigate(['/gv-contaParcial'], {
      transition: {
        duration: 1000,
        name: 'slideTop',
      }
    });
  }
}
