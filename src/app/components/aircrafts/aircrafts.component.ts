import { Component, OnInit } from '@angular/core';
import { AircraftService } from 'src/app/services/aircraft.service';
import { Aircraft } from 'src/app/model/aircraft.model';
import { Observable, startWith, map, catchError, of } from 'rxjs';
import { AppDataState, DataStateEnum } from 'src/app/state/aircraft.state';
import { Laboratory } from 'laboratory';

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
}
