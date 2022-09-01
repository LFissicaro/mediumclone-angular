import { Statement } from '@angular/compiler';
import { Action, createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import { registerAction } from 'src/app/auth/store/actions';

const initialState: AuthStateInterface = {
  isSubmitting: false,
};

// No reducer eh onde encontraremos o gerenciamento de todos os estados. E eh onde performaremos as acoes em cima destes estados.
const authReducer = createReducer(
  initialState,
  on(
    // a funcao 'on' serve para nos dizer que apos  o chamado da acao registerAction a funcao abaixo sera executada.
    // Funcao essa que altera o estado de toda a aplicacao.
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  )
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
