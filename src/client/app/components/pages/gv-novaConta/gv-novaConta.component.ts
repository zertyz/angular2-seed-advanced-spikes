// libs
import {Store} from '@ngrx/store';

// app
import { BaseComponent, RouterExtensions } from '../../../frameworks/core/index';
import { NameListService } from '../../../frameworks/sample/index';

@BaseComponent({
  moduleId: module.id,
  selector: 'gv-novaConta',
  templateUrl: 'gv-novaConta.component.html',
  styleUrls: ['gv-novaConta.component.css']
})
export class GvNovaContaComponent {
  public newName: string = '';
  constructor(private store: Store<any>, public nameListService: NameListService, public routerext: RouterExtensions) {

  }

  gotoNext() {
    this.routerext.navigate(['/gv-menu'], {
      transition: {
        duration: 1000,
        name: 'slideTop',
      }
    });
  }
}
