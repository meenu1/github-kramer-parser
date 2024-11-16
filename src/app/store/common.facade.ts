import { Injectable, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as CommonActions from './common.actions';
import * as CommonSelectors from './common.selectors';

@Injectable()
export class CommonFacade {
  private readonly store = inject(Store);
  listOfParsers$ = this.store.pipe(select(CommonSelectors.getList));

  getList() {
    this.store.dispatch(CommonActions.getList());
  }
}
