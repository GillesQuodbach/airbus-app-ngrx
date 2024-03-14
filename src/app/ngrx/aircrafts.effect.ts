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
}
