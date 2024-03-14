import { Action } from '@ngrx/store';
import { Aircraft } from '../model/aircraft.model';

export enum AircraftsActionsTypes {
  // ! AVANT NGRX
  // GET_ALL_AIRCRAFTS = '[Aircrafts] Get All Aircrafts',
  // GET_DESIGNED_AIRCRAFTS = '[Aircrafts] Get Designed Aircrafts',
  // GET_DEVELOPMENT_AIRCRAFTS = '[Aircrafts] Get Developed Aircrafts',
  // GET_SEARCH_AIRCRAFTS = '[Aircrafts] Get Search Aircrafts',

  // Action : Get all aircrafts
  // affichage des avions = 3 états possible
  GET_ALL_AIRCRAFTS = '[Aircrafts] Get All Aircrafts',
  GET_ALL_AIRCRAFTS_SUCCESS = '[Aircrafts] Get All Aircrafts Success',
  GET_ALL_AIRCRAFTS_ERROR = '[Aircrafts] Get All Aircrafts Error',
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

export type AircraftsActions =
  | GetAllAircraftsAction
  | GetAllAircraftsActionSuccess
  | GetAllAircraftsActionError;
