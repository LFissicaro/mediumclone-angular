import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'src/app/auth/store/actionTypes';
import { RegisterRequestInterface } from 'src/app/auth/shared/types/registerRequest.interface';

// Eh utilizado pela aplicacao para funcionar como uma camada entre a aplicacao em si e as acoes nos estados da mesma.
export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);
