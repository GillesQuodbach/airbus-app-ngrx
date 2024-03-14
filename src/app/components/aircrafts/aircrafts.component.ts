import { Component, OnInit } from '@angular/core';
import { AircraftService } from 'src/app/services/aircraft.service';
import { Aircraft } from 'src/app/model/aircraft.model';
import { Observable, startWith, map, catchError, of } from 'rxjs';
import { AppDataState, DataStateEnum } from 'src/app/state/aircraft.state';
import { Laboratory } from 'laboratory';
import { AircraftsActionsTypes } from 'src/app/model/action.model';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css'],
})
export class AircraftsComponent implements OnInit {
  // aircrafts: Aircraft[] | null = null; //soit un tableau d'avions soit null d'ou l'affectation
  //option 2 : aircrafts est de type observable contenant des avions
  // le cigle $  est une convention d'écriture pour indiquer qu'il s'agit d'un observable
  aircrafts$: Observable<AppDataState<Aircraft[]>> | null = null;
  // error = null;
  readonly dataStateEnum = DataStateEnum;
  constructor(
    private aircraftService: AircraftService,
    private labo: Laboratory
  ) {}

  ngOnInit(): void {
    // console.log(this.labo.tests());
  }

  getAllAircrafts() {
    this.aircrafts$ = this.aircraftService.getAirCrafts().pipe(
      map((data) => ({ dataState: DataStateEnum.LOADED, data: data })),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError((err) =>
        of({ dataState: DataStateEnum.ERROR, errorMessage: err.message })
      )
    );
  }

  getSearchedAircrafts(value: any) {
    this.aircrafts$ = this.aircraftService
      .getAircraftsBySearchValue(value)
      .pipe(
        map((data) => ({ dataState: DataStateEnum.LOADED, data: data })),
        startWith({ dataState: DataStateEnum.LOADING }),
        catchError((err) =>
          of({ dataState: DataStateEnum.ERROR, errorMessage: err.message })
        )
      );
  }

  onActionEvent($actionEvent: any) {
    switch ($actionEvent.type) {
      case AircraftsActionsTypes.GET_ALL_AIRCRAFTS:
        this.getAllAircrafts();
        break;

      case AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS:
        this.getSearchedAircrafts($actionEvent.payload);
        break;
    }
  }
}
