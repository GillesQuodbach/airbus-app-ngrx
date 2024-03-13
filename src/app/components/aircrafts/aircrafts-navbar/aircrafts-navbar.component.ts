import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AircraftService } from 'src/app/services/aircraft.service';
import { Aircraft } from 'src/app/model/aircraft.model';
import { Observable, startWith, map, catchError, of } from 'rxjs';
import { AppDataState, DataStateEnum } from 'src/app/state/aircraft.state';
import { Laboratory } from 'laboratory';
import { AircraftsActionsTypes } from 'src/app/model/action.model';
@Component({
  selector: 'app-aircrafts-navbar',
  templateUrl: './aircrafts-navbar.component.html',
  styleUrls: ['./aircrafts-navbar.component.css'],
})
export class AircraftsNavbarComponent implements OnInit {
  @Output() eventEmitter: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  getAllAircrafts() {
    this.eventEmitter.emit({
      type: AircraftsActionsTypes.GET_ALL_AIRCRAFTS,
      payload: null,
    });
  }

  onSearch(value: any) {
    this.eventEmitter.emit({
      type: AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS,
      payload: value,
    });
  }
  getDesignedAircrafts() {}

  getDevelopmentAircrafts() {}
}
