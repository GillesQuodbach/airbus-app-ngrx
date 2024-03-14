import { Aircraft } from '../model/aircraft.model';

export enum AircraftsStateEnum { // les diffrents états du state
  LOADING = 'Loading',
  LOADED = 'Loaded',
  ERROR = 'Error',
  INITIAL = 'Initial',
}

export interface AircraftsState {
  //structure du state
  aircrafts: Aircraft[];
  errorMessage: string;
  dataState: AircraftsStateEnum;
}

//état initial du state et valeurs par défaut
export const initState: AircraftsState = {
  aircrafts: [],
  errorMessage: '',
  dataState: AircraftsStateEnum.INITIAL,
};
