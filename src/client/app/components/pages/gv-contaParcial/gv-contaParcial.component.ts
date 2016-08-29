// libs
import {Store} from '@ngrx/store';

// app
import {FormComponent, RouterExtensions} from '../../../frameworks/core/index';
import {NameListService} from '../../../frameworks/app/index';

@FormComponent({
  moduleId: module.id,
  selector: 'gv-contaParcial',
  templateUrl: 'gv-contaParcial.component.html',
  styleUrls: ['gv-contaParcial.component.css']
})
export class GvContaParcialComponent {
  public newName: string = '';
  constructor(private store: Store<any>, public nameListService: NameListService, public routerext: RouterExtensions) {

  }

  gotoNext1() {
    this.routerext.navigate(['/gv-contaParcialIndividual'], {
      transition: {
        duration: 1000,
        name: 'slideTop',
      }
    });
  }

  gotoNext2() {
    this.routerext.navigate(['/gv-contaParcialMesa'], {
      transition: {
        duration: 1000,
        name: 'slideTop',
      }
    });
  }

}
