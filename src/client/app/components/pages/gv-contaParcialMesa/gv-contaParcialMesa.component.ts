// libs
import {Store} from '@ngrx/store';

// app
import {FormComponent, RouterExtensions} from '../../../frameworks/core/index';
import {NameListService} from '../../../frameworks/app/index';

@FormComponent({
  moduleId: module.id,
  selector: 'gv-contaParcialMesa',
  templateUrl: 'gv-contaParcialMesa.component.html',
  styleUrls: ['gv-contaParcialMesa.component.css']
})
export class GvContaParcialMesaComponent {
  public newName: string = '';
  constructor(private store: Store<any>, public nameListService: NameListService, public routerext: RouterExtensions) {

  }

  gotoNext() {
    this.routerext.navigate(['/gv-formaDePagamento'], {
      transition: {
        duration: 1000,
        name: 'slideTop',
      }
    });
  }
}
