import { LoginActionsTypes } from './login.actions';
import { Action } from '@ngrx/store';
import { User } from 'src/app/model/user.model';

export interface LoginEvent {
  type: LoginActionsTypes;
  payload: any;
}

export enum LoginActionsTypes {
  GET_USER = '[User] Get User',
  GET_USER_SUCCESS = '[User] Get User Success',
  GET_USER_ERROR = '[User] Get User Error',
}

export class GetUserAction implements Action {
  type: LoginActionsTypes = LoginActionsTypes.GET_USER;
  constructor(public payload: any) {}
}

export class GetUserActionSuccess implements Action {
  type: LoginActionsTypes = LoginActionsTypes.GET_USER_SUCCESS;
  constructor(public payload: User[]) {}
}

export class GetUserActionError implements Action {
  type: LoginActionsTypes = LoginActionsTypes.GET_USER_ERROR;
  constructor(public payload: string) {}
}

export type LoginActions = GetUserAction |