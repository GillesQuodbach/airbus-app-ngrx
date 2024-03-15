import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AircraftService } from '../services/aircraft.service';
import { Observable, catchError, map, mergeMap, of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  AircraftsActionsTypes,
  GetAllAircraftsActionSuccess,
  GetAllAircraftsActionError,
  GetDesignedAircraftsActionSuccess,
  GetDesignedAircraftsActionError,
  GetDevelopmentAircraftsActionSuccess,
  GetDevelopmentAircraftsActionError,
  GetSearchedAircraftsActionSuccess,
  GetSearchedAircraftsActionError,
} from './aircrafts.actions';

@Injectable()
export class AircraftsEffects {
  constructor(
    private aircraftService: AircraftService,
    private effectActions: Actions
  ) {}

  getAllAircraftsEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(AircraftsActionsTypes.GET_ALL_AIRCRAFTS),
      mergeMap((action) => {
        return this.aircraftService.getAirCrafts().pipe(
          map((aircrafts) => new GetAllAircraftsActionSuccess(aircrafts)),
          catchError((err) => of(new GetAllAircraftsActionError(err.message)))
        );
      })
    )
  );

  getDesignedAircraftsEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS),
      mergeMap((action) => {
        return this.aircraftService.getDesignedAircrafts().pipe(
          map((aircrafts) => new GetDesignedAircraftsActionSuccess(aircrafts)),
          catchError((err) =>
            of(new GetDesignedAircraftsActionError(err.message))
          )
        );
      })
    )
  );
  getDevelopmentAircraftsEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS),
      mergeMap((action) => {
        return this.aircraftService.getDevelopmentAircraft().pipe(
          map(
            (aircrafts) => new GetDevelopmentAircraftsActionSuccess(aircrafts)
          ),
          catchError((err) =>
            of(new GetDevelopmentAircraftsActionError(err.message))
          )
        );
      })
    )
  );

  GetSearchedAircraftsEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(AircraftsActionsTypes.GET_SEARCHED_AIRCRAFTS),
      mergeMap((action: { type: string; payload: { value: string } }) => {
        console.log('GetSearchedAircraftsEffect', action.payload);
        return this.aircraftService
          .getSearchedAircraft(action.payload.value)
          .pipe(
            map(
              (aircrafts) => new GetSearchedAircraftsActionSuccess(aircrafts)
            ),
            catchError((err) =>
              of(new GetSearchedAircraftsActionError(err.message))
            )
          );
      })
    )
  );
}
