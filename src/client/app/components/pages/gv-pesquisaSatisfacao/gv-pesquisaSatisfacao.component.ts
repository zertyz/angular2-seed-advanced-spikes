// libs
import {Store} from '@ngrx/store';

// app
import {FormComponent, RouterExtensions} from '../../../frameworks/core/index';
import {NameListService} from '../../../frameworks/app/index';

@FormComponent({
  moduleId: module.id,
  selector: 'gv-pesquisaSatisfacao',
  templateUrl: 'gv-pesquisaSatisfacao.component.html',
  styleUrls: ['gv-pesquisaSatisfacao.component.css']
})
export class GvPesquisaSatisfacaoComponent {
  public newName: string = '';
  constructor(private store: Store<any>, public nameListService: NameListService, public routerext: RouterExtensions) {

  }

  gotoNext() {
    this.routerext.navigate(['/gv-home'], {
      transition: {
        duration: 1000,
        name: 'slideTop',
      }
    });
  }
}
