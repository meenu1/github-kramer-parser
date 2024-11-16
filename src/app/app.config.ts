import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import * as fromCommons from './store/common.reducer';
import { CommonEffects } from './store/common.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects([CommonEffects]),
    provideStore(),
    provideState(fromCommons.COMMON_FEATURE_KEY, fromCommons.commonReducer),
    provideHttpClient(),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
  ],
};
