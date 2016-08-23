// libs
import {Store} from '@ngrx/store';

// app
import {FormComponent, RouterExtensions} from '../../../frameworks/core/index';
import {NameListService} from '../../../frameworks/app/index';

@FormComponent({
  moduleId: module.id,
  selector: 'gv-edicao',
  templateUrl: 'gv-edicao.component.html',
  styleUrls: ['gv-edicao.component.css']
})
export class GvEdicaoComponent {
  public newName: string = '';
  constructor(private store: Store<any>, public nameListService: NameListService, public routerext: RouterExtensions) {

  }

  gotoNext() {
    this.routerext.navigate(['/gv-efetivaPedidos'], {
      transition: {
        duration: 1000,
        name: 'slideTop',
      }
    });
  }
}
