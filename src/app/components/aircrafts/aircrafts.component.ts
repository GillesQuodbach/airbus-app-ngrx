import {
  AircraftsState,
  AircraftsStateEnum,
} from './../../ngrx/aircrafts.state';
import { Component, OnInit } from '@angular/core';
import { AircraftService } from 'src/app/services/aircraft.service';
import { Aircraft } from 'src/app/model/aircraft.model';
import { Observable, startWith, map, catchError, of } from 'rxjs';
import { AppDataState, DataStateEnum } from 'src/app/state/aircraft.state';
import { Laboratory } from 'laboratory';
import {
  ActionEvent,
  AircraftsActionsTypes,
} from 'src/app/ngrx/aircrafts.actions';
import { EventService } from 'src/app/services/event.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css'],
})
export class AircraftsComponent implements OnInit {
  aircrafts$: Observable<AppDataState<Aircraft[]>> | null = null;
  aircraftsState$: Observable<AircraftsState> | null = null;

  readonly aircraftsStateEnum = AircraftsStateEnum;
  readonly dataStateEnum = DataStateEnum;
  constructor(
    private aircraftService: AircraftService,
    private labo: Laboratory,
    private eventService: EventService,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.aircraftsState$ = this.store.pipe(map((state) => state.airbusState));
  }
}
