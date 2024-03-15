import { EntityState } from '@ngrx/entity';
import { Action } from '@ngrx/store';

export interface Operation {
  type: OperationActionsTypes;
  payload: any;
}

export enum OperationActionsTypes {
  ALL_OPERATION = '[Operation] All operation',
  ADD_OPERATION = '[Operation] Add operation',
  REMOVE_OPERATION = '[Operation] Remove operation',
}

export class GetAllEntitiesAction implements Action {
  type: OperationActionsTypes = OperationActionsTypes.ALL_OPERATION;
  constructor(public payload: any) {}
}

export type EntitiesActions = GetAllEntitiesAction;
