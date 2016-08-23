// libs
import {Store} from '@ngrx/store';

// app
import {FormComponent, RouterExtensions} from '../../../frameworks/core/index';
import {NameListService} from '../../../frameworks/app/index';

@FormComponent({
  moduleId: module.id,
  selector: 'gv-formaDePagamento',
  templateUrl: 'gv-formaDePagamento.component.html',
  styleUrls: ['gv-formaDePagamento.component.css']
})
export class GvFormaDePagamentoComponent {
  public newName: string = '';
  constructor(private store: Store<any>, public nameListService: NameListService, public routerext: RouterExtensions) {

  }

  gotoNext() {
    this.routerext.navigate(['/gv-pesquisaSatisfacao'], {
      transition: {
        duration: 1000,
        name: 'slideTop',
      }
    });
  }
}
