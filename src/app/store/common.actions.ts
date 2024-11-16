import { createAction, props } from '@ngrx/store';
import { ParserError, ParserInfo } from '../models/model';

export const getList = createAction('[Common] List');
export const getListSuccess = createAction('[Common] List Success', props<{ listOfParsers: ParserInfo[] }>());
export const getListFailure = createAction('[Common] List Failure', props<{ error: ParserError }>());

