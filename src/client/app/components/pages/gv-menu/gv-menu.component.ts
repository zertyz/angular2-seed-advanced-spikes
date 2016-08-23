// libs
import {Store} from '@ngrx/store';

// app
import {FormComponent, RouterExtensions} from '../../../frameworks/core/index';
import {NameListService} from '../../../frameworks/app/index';

@FormComponent({
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
