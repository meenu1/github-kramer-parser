import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of } from 'rxjs';
import * as CommonsActions from './common.actions';
import { CommonService } from './common.service';
import { Store } from '@ngrx/store';

@Injectable()
export class CommonEffects {
  private store = inject(Store);
  private actions$ = inject(Actions);
  private commonService = inject(CommonService);

  getBenQList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommonsActions.getList),
      concatMap(() => {
        return this.commonService.getList().pipe(
          map(listOfParsers => CommonsActions.getListSuccess({ listOfParsers })),
          catchError(error => of(CommonsActions.getListFailure(error))),
        );
      }),
    ),
  );

}
