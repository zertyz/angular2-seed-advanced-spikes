// libs
import {Store} from '@ngrx/store';

// app
import { BaseComponent, RouterExtensions } from '../../../frameworks/core/index';
import { NameListService } from '../../../frameworks/sample/index';

@BaseComponent({
  moduleId: module.id,
  selector: 'gv-home',
  templateUrl: 'gv-home.component.html',
  styleUrls: ['gv-home.component.css']
})
export class GvHomeComponent {
  public newName: string = '';
  constructor(private store: Store<any>, public nameListService: NameListService, public routerext: RouterExtensions) {

  }

  gotoStart() {
    this.routerext.navigate(['/gv-novaConta'], {
      transition: {
        duration: 1000,
        name: 'slideTop',
      }
    });
  }
}
