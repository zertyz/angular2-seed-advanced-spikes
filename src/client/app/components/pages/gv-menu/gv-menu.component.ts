// libs
import {Store} from '@ngrx/store';

// app
import { BaseComponent, RouterExtensions } from '../../../frameworks/core/index';
import { NameListService } from '../../../frameworks/sample/index';

@BaseComponent({
  moduleId: module.id,
  selector: 'gv-menu',
  templateUrl: 'gv-menu.component.html',
  styleUrls: ['gv-menu.component.css']
})
export class GvMenuComponent {
  public newName: string = '';
  constructor(private store: Store<any>, public nameListService: NameListService, public routerext: RouterExtensions) {

  }

  gotoNext() {
    this.routerext.navigate(['/gv-confirmaPedidos'], {
      transition: {
        duration: 1000,
        name: 'slideTop',
      }
    });
  }
}
