import { createReducer, on, Action } from '@ngrx/store';

import * as CommonActions from './common.actions';
import { ParserInfo, ParserError } from '../models/model';

export const COMMON_FEATURE_KEY = 'common';

export interface CommonState {
  error?: ParserError; // last known error (if any)
  listOfParsers?: ParserInfo[];

}

export interface CommonPartialState {
  readonly [COMMON_FEATURE_KEY]: CommonState;
}

export const initialCommonState: CommonState = {
  // set initial required properties
};

const reducer = createReducer(
  initialCommonState,
  on(CommonActions.getListSuccess, (state, { listOfParsers }) => ({ ...state, listOfParsers })),
  on(CommonActions.getListFailure, (state, { error }) => ({ ...state, error })),
);

export function commonReducer(state: CommonState | undefined, action: Action) {
  return reducer(state, action);
}
