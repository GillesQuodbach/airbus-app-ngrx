import { Action } from '@ngrx/store';
import {
  AircraftsState,
  AircraftsStateEnum,
  initState,
} from './aircrafts.state';
import { AircraftsActions, AircraftsActionsTypes } from './aircrafts.actions';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Operation } from '../model/operation.model';
import { OperationsActionsType } from './operation.actions';
import { UserActions, UsersActionsTypes } from './login/login.actions';

// adaptateur pour utiliser les méthodes de Entities
export const adapter: EntityAdapter<Operation> = createEntityAdapter<Operation>(
  {}
);

// state initial
export const initialState: AircraftsState = adapter.getInitialState({
  aircrafts: [],
  errorMessage: '',
  dataState: AircraftsStateEnum.INITIAL,
  ids: [],
  entities: {},
  users: [],
  isUserLogged: false,
});

export function AircraftsReducer(
  state: AircraftsState = initialState,
  action: Action
): AircraftsState {
  switch (action.type) {
    case OperationsActionsType.ADD_OPERATION:
      return adapter.addOne((<AircraftsActions>action).payload, state);
    case OperationsActionsType.REMOVE_OPERATION:
      return adapter.removeOne((<AircraftsActions>action).payload, state);

    // ! User LOGGED
    case UsersActionsTypes.GET_USERS_LOGGED:
      console.log('loading...');
      return {
        ...state,
        dataState: AircraftsStateEnum.LOADING,
        aircrafts: (<AircraftsActions>action).payload,
        users: (<UserActions>action).payload,
        isUserLogged: (<UserActions>action).payload,
      };

    case UsersActionsTypes.GET_USERS_LOGGED_SUCCESS:
      console.log('loaded...');
      return {
        ...state,
        dataState: AircraftsStateEnum.LOADING,
        aircrafts: (<AircraftsActions>action).payload,
        users: (<UserActions>action).payload,
        isUserLogged: (<UserActions>action).payload,
      };

    case UsersActionsTypes.GET_USERS_LOGGED_SUCCESS:
      console.log('error');
      return {
        ...state,
        dataState: AircraftsStateEnum.LOADING,
        aircrafts: (<AircraftsActions>action).payload,
        users: (<UserActions>action).payload,
        isUserLogged: (<UserActions>action).payload,
      };
    // ! GET ALL USERS
    case UsersActionsTypes.GET_USERS:
      console.log('loading...');
      return {
        ...state,
        dataState: AircraftsStateEnum.LOADING,
        aircrafts: (<AircraftsActions>action).payload,
        users: (<UserActions>action).payload,
      };
    case UsersActionsTypes.GET_USERS_SUCCESS:
      console.log('loaded...');
      return {
        ...state,
        dataState: AircraftsStateEnum.LOADED,
        aircrafts: (<AircraftsActions>action).payload,
        users: (<UserActions>action).payload,
      };

    case UsersActionsTypes.GET_USERS_ERROR:
      console.log('error');
      return {
        ...state,
        dataState: AircraftsStateEnum.ERROR,
        aircrafts: (<AircraftsActions>action).payload,
      };
    // ! GET ALL AIRCRAFTS
    case AircraftsActionsTypes.GET_ALL_AIRCRAFTS:
      console.log('loading...');
      return {
        ...state,
        dataState: AircraftsStateEnum.LOADING,
        aircrafts: (<AircraftsActions>action).payload,
      };

    case AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS:
      return {
        ...state,
        dataState: AircraftsStateEnum.LOADED,
        aircrafts: (<AircraftsActions>action).payload,
      };

    case AircraftsActionsTypes.GET_ALL_AIRCRAFTS_ERROR:
      return {
        ...state,
        dataState: AircraftsStateEnum.ERROR,
        errorMessage: (<AircraftsActions>action).payload,
      };

    // ! GET DESIGNED AIRCRAFTS
    case AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS:
      return {
        ...state,
        dataState: AircraftsStateEnum.LOADING,
        aircrafts: (<AircraftsActions>action).payload,
      };
    case AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS_SUCCESS:
      return {
        ...state,
        dataState: AircraftsStateEnum.LOADED,
        aircrafts: (<AircraftsActions>action).payload,
      };
    case AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS_ERROR:
      return {
        ...state,
        dataState: AircraftsStateEnum.ERROR,
        errorMessage: (<AircraftsActions>action).payload,
      };

    // ! GET DEVELOPMENT AIRCRAFTS
    case AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS:
      return {
        ...state,
        dataState: AircraftsStateEnum.LOADING,
        aircrafts: (<AircraftsActions>action).payload,
      };
    case AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS_SUCCESS:
      return {
        ...state,
        dataState: AircraftsStateEnum.LOADED,
        aircrafts: (<AircraftsActions>action).payload,
      };
    case AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS_ERROR:
      return {
        ...state,
        dataState: AircraftsStateEnum.ERROR,
        errorMessage: (<AircraftsActions>action).payload,
      };

    // ! GET SEARCHED AIRCRAFTS
    case AircraftsActionsTypes.GET_SEARCHED_AIRCRAFTS:
      return {
        ...state,
        dataState: AircraftsStateEnum.LOADING,
        aircrafts: (<AircraftsActions>action).payload,
      };
    case AircraftsActionsTypes.GET_SEARCHED_AIRCRAFTS_SUCCESS:
      return {
        ...state,
        dataState: AircraftsStateEnum.LOADED,
        aircrafts: (<AircraftsActions>action).payload,
      };
    case AircraftsActionsTypes.GET_SEARCHED_AIRCRAFTS_ERROR:
      return {
        ...state,
        dataState: AircraftsStateEnum.ERROR,
        errorMessage: (<AircraftsActions>action).payload,
      };
    default:
      return { ...state };
  }
}
