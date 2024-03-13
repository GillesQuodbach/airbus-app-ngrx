import { Component, OnInit } from '@angular/core';
import { AircraftService } from 'src/app/services/aircraft.service';
import { Aircraft } from 'src/app/model/aircraft.model';
import { Observable, startWith, map, catchError, of } from 'rxjs';
import { AppDataState, DataStateEnum } from 'src/app/state/aircraft.state';
import { Laboratory } from 'laboratory';
@Component({
  selector: 'app-aircrafts-navbar',
  templateUrl: './aircrafts-navbar.component.html',
  styleUrls: ['./aircrafts-navbar.component.css'],
})
export class AircraftsNavbarComponent implements OnInit {
  constructor(private aircraftService: AircraftService) {}
  aircrafts$: Observable<AppDataState<Aircraft[]>> | null = null;
  // error = null;
  readonly dataStateEnum = DataStateEnum;
  ngOnInit(): void {}
  getAllAircrafts() {
    //option 1 : nous observons ici ce qui ce passe lorsqu'on déclenche l'évènement : récupérer la liste d'avions en base
    // this.aircraftService.getAirCrafts().subscribe({
    //   next: (data) => (this.aircrafts = data),
    //   error: (err) => (this.error = err.message),
    //   complete: () => (this.error = null),
    // });
    //option2 : la methode du service renvoi un Observable
    this.aircrafts$ = this.aircraftService.getAirCrafts().pipe(
      map((data) => ({ dataState: DataStateEnum.LOADED, data: data })),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError((err) =>
        of({ dataState: DataStateEnum.ERROR, errorMessage: err.message })
      )
    );
    //delors il faut bien faire un subscribe  puisqu'il n'est plus sollicité ici
    // en effet, l'appel sera fait côté html en précisant (pipe) | async toujours pour agir lorsque des données arrivent
  }
  getDesignedAircrafts() {}

  getDevelopmentAircrafts() {}
}
