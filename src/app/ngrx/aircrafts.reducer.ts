import { Action } from '@ngrx/store';
import {
  AircraftsState,
  AircraftsStateEnum,
  initState,
} from './aircrafts.state';
import { AircraftsActions, AircraftsActionsTypes } from './aircrafts.actions';
import { STATE_PROVIDERS } from '@ngrx/store/src/state';

export function AircraftsReducer(
  state: AircraftsState = initState,
  action: Action
) {
  switch (action.type) {
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
