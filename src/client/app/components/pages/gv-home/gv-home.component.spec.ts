import {TestComponentBuilder} from '@angular/compiler/testing';
import {Component} from '@angular/core';
import {getDOM} from '@angular/platform-browser/src/dom/dom_adapter';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

// libs
import {provideStore} from '@ngrx/store';

import {t} from '../../../frameworks/test/index';
import {TEST_CORE_PROVIDERS, TEST_HTTP_PROVIDERS, TEST_ROUTER_PROVIDERS} from '../../../frameworks/core/testing/index';
import {NameListService, nameListReducer} from '../../../frameworks/app/index';
import {TEST_MULTILINGUAL_PROVIDERS} from '../../../frameworks/i18n/testing/index';
import {GvHomeComponent} from './gv-home.component';

export function main() {
  t.describe('@Component: GvHomeComponent', () => {

    t.it('should work',
      t.async(t.inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        tcb.createAsync(TestComponent)
          .then((rootTC:any) => {
            rootTC.detectChanges();

            let gvHomeInstance = rootTC.debugElement.children[0].componentInstance;
            let homeDOMEl = rootTC.debugElement.children[0].nativeElement;

            t.e(gvHomeInstance.nameListService).toEqual(jasmine.any(NameListService));
            t.e(getDOM().querySelectorAll(homeDOMEl, 'li').length).toEqual(0);

            gvHomeInstance.newName = 'Minko';
            gvHomeInstance.addName();
            rootTC.detectChanges();

            t.e(getDOM().querySelectorAll(homeDOMEl, 'li').length).toEqual(1);

            t.e(getDOM().querySelectorAll(homeDOMEl, 'li')[0].textContent).toEqual('Minko');
          });
      })));
  });
}

@Component({
  providers: [
    disableDeprecatedForms(),
    provideForms(),
    TEST_CORE_PROVIDERS(),
    TEST_HTTP_PROVIDERS(),
    TEST_ROUTER_PROVIDERS(),
    TEST_MULTILINGUAL_PROVIDERS(),
    provideStore({ names: nameListReducer }),
    NameListService
  ],
  selector: 'test-cmp',
  directives: [GvHomeComponent],
  template: '<gv-home></gv-home>'
})
class TestComponent {

}
