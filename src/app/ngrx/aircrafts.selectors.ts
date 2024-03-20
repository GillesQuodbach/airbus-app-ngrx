import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AircraftsState, AircraftsStateEnum } from './aircrafts.state';
import { Aircraft } from '../model/aircraft.model';

// on veux renvoyer le nombre d'avion en phase d'étude ET en construction
export const selectCountAlertAircrafts = createSelector(
  createFeatureSelector('airbusState'), // spécifie sur quel state on agit
  (state: AircraftsState) => {
    let total: number = 0;
    // if statment added becauseof typerror on init state.dataState was undefined
    if (state.dataState === AircraftsStateEnum.LOADED) {
      state.aircrafts.forEach((a) => {
        if (a.development == true && a.design == true) total++;
      });
    }
    return total;
  }
);

export const selectDevAndDesignedAircrafts = createSelector(
  createFeatureSelector('airbusState'),
  (state: AircraftsState) => {
    let aircraftArray: Aircraft[] = [];
    if (state.dataState === AircraftsStateEnum.LOADED) {
      state.aircrafts.forEach((a) => {
        if (a.development == true && a.design == true) {
          aircraftArray.push(a);
        }
      });
    }
    console.log('aircraftArray', aircraftArray);
    return aircraftArray;
  }
);

export const isUserLoggedIn = createSelector(
  createFeatureSelector('airbusState'),

  (state: AircraftsState) => {
    console.log('test');
    let isConnected;
    if (state.isUserLogged === true) {
      console.log('USER CONNECTED');
      isConnected = true;
    } else {
      isConnected = false;
    }
    console.log('hello from selector isUserLoggedIn', isConnected);
    return isConnected;
  }
);
