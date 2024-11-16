import { createFeatureSelector, createSelector } from '@ngrx/store';
import { COMMON_FEATURE_KEY, CommonState } from './common.reducer';

export const selectCommonsState = createFeatureSelector<CommonState>(COMMON_FEATURE_KEY);

export const getList = createSelector(selectCommonsState, (state: CommonState) => state.listOfParsers);
