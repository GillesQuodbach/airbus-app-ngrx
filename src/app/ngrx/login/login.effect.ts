import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { Observable, catchError, map, mergeMap, of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  GetUserAction,
  GetUserActionError,
  GetUserActionSuccess,
  UsersActionsTypes,
} from './login.actions';
import { AircraftsState } from '../aircrafts.state';

@Injectable()
export class UsersEffects {
  constructor(
    private authService: AuthenticateService,
    private effectActions: Actions
  ) {}

  getAllUsersEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(UsersActionsTypes.GET_USERS),
      mergeMap((action) => {
        return this.authService.getUsers().pipe(
          map((user) => new GetUserActionSuccess(user)),
          catchError((err) => of(new GetUserActionError(err.message)))
        );
      })
    )
  );
}
