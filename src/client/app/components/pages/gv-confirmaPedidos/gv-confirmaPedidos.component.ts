// libs
import {Store} from '@ngrx/store';

// app
import { BaseComponent, RouterExtensions } from '../../../frameworks/core/index';
import { NameListService } from '../../../frameworks/sample/index';

@BaseComponent({
  moduleId: module.id,
  selector: 'gv-confirmaPedidos',
  templateUrl: 'gv-confirmaPedidos.component.html',
  styleUrls: ['gv-confirmaPedidos.component.css']
})
export class GvConfirmaPedidosComponent {
  public newName: string = '';
  constructor(private store: Store<any>, public nameListService: NameListService, public routerext: RouterExtensions) {

  }

  gotoNext() {
    this.routerext.navigate(['/gv-edicao'], {
      transition: {
        duration: 1000,
        name: 'slideTop',
      }
    });
  }
}
