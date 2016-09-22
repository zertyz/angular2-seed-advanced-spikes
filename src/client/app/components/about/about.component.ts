import {BaseComponent} from '../../frameworks/core/index';

import { Ng2NvD3ChartsComponent } from './charts.component';

@BaseComponent({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  directives: [Ng2NvD3ChartsComponent],
})
export class AboutComponent  {

}
