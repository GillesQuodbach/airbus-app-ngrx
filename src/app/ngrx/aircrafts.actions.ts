import { Action } from '@ngrx/store';
import { Aircraft } from '../model/aircraft.model';

export interface ActionEvent {
  type: AircraftsActionsTypes;
  payload: any;
}

export enum AircraftsActionsTypes {
  // ! AVANT NGRX
  // GET_ALL_AIRCRAFTS = '[Aircrafts] Get All Aircrafts',
  // GET_DESIGNED_AIRCRAFTS = '[Aircrafts] Get Designed Aircrafts',
  // GET_DEVELOPMENT_AIRCRAFTS = '[Aircrafts] Get Developed Aircrafts',
  // GET_SEARCH_AIRCRAFTS = '[Aircrafts] Get Search Aircrafts',

  // affichage des avions = 3 états possible
  //? Action : Get all aircrafts
  GET_ALL_AIRCRAFTS = '[Aircrafts] Get All Aircrafts',
  GET_ALL_AIRCRAFTS_SUCCESS = '[Aircrafts] Get All Aircrafts Success',
  GET_ALL_AIRCRAFTS_ERROR = '[Aircrafts] Get All Aircrafts Error',
  GET_SEARCH_AIRCRAFTS = '[Aircrafts] Get Searched Aircafts',

  //? Action : Get Designed aircrafts
  GET_DESIGNED_AIRCRAFTS = '[Aircrafts] Get Designed Aircrafts',
  GET_DESIGNED_AIRCRAFTS_SUCCESS = '[Aircrafts] Get Designed Aircrafts Success',
  GET_DESIGNED_AIRCRAFTS_ERROR = '[Aircrafts] Get Designed Aircrafts Error',
}

// Get all aircrafts
export class GetAllAircraftsAction implements Action {
  type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS;
  constructor(public payload: any) {}
}

export class GetAllAircraftsActionSuccess implements Action {
  type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS;
  constructor(public payload: Aircraft[]) {}
}

export class GetAllAircraftsActionError implements Action {
  type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_ERROR;
  constructor(public payload: string) {}
}

// Get designed aircrafts
export class GetDesignedAircraftsAction implements Action {
  type: AircraftsActionsTypes = AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS;
  constructor(public payload: any) {}
}

export class GetDesignedAircraftsActionSuccess implements Action {
  type: AircraftsActionsTypes =
    AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS_SUCCESS;
  constructor(public payload: Aircraft[]) {}
}

export class GetDesignedAircraftsActionError implements Action {
  type: AircraftsActionsTypes =
    AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS_ERROR;
  constructor(public payload: string) {}
}
export type AircraftsActions =
  | GetAllAircraftsAction
  | GetAllAircraftsActionSuccess
  | GetAllAircraftsActionError
  | GetDesignedAircraftsAction
  | GetDesignedAircraftsActionSuccess
  | GetDesignedAircraftsActionError;
