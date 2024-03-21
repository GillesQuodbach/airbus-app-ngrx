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

@Injectable()
export class UsersEffects {
  constructor(
    private authService: AuthenticateService,
    private effectActions: Actions
  ) {}

  getAllUsersEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(UsersActionsTypes.GET_USER),
      mergeMap((action: { type: string; payload: { email: string } }) => {
        const { email } = action.payload;

        return this.authService.checkEmail(email).pipe(
          mergeMap((emailExists) => {
            if (emailExists) {
              return this.authService.getUsers(email).pipe(
                map((user) => new GetUserActionSuccess(user)),
                catchError((err) => of(new GetUserActionError(err.message)))
              );
            } else {
              return of(new GetUserActionError('Email does not exist'));
            }
          })
        );
      })
    )
  );
}
