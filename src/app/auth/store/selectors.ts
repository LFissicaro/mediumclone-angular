import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';

export const authFeatureSelector =
  createFeatureSelector<AuthStateInterface>('auth');

// utilizado para recuperar fatias da informacao do estado da aplicacao com o redux
export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);
