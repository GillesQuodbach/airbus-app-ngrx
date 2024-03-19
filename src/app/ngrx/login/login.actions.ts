import { Action } from '@ngrx/store';
import { User } from 'src/app/model/user.model';

export interface UserEvent {
  type: UsersActionsTypes;
  payload: any;
}

export enum UsersActionsTypes {
  GET_USERS = '[User] Get User',
  GET_USERS_SUCCESS = '[User] Get User Success',
  GET_USERS_ERROR = '[User] Get User Error',
}

export class GetUserAction implements Action {
  type: UsersActionsTypes = UsersActionsTypes.GET_USERS;
  constructor(public payload: any) {}
}

export class GetUserActionSuccess implements Action {
  type: UsersActionsTypes = UsersActionsTypes.GET_USERS_SUCCESS;
  constructor(public payload: User[]) {}
}

export class GetUserActionError implements Action {
  type: UsersActionsTypes = UsersActionsTypes.GET_USERS_ERROR;
  constructor(public payload: string) {}
}

export type UserActions =
  | GetUserAction
  | GetUserActionSuccess
  | GetUserActionError;
