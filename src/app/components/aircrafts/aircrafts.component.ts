import { Component, OnInit } from '@angular/core';
import { AircraftService } from 'src/app/services/aircraft.service';
import { Aircraft } from 'src/app/model/aircraft.model';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css'],
})
export class AircraftsComponent implements OnInit {
  aircrafts: Aircraft[] | null = null; //soit un tableau d'avions soit null d'ou l'affectation
  error = null;

  constructor(private aircraftService: AircraftService) {}

  ngOnInit(): void {}

  getAllAircrafts() {
    //option 1 : nous observons ici ce qui ce passe lorsqu'on déclenche l'évènement : récupérer la liste d'avions en base
    this.aircraftService.getAirCrafts().subscribe({
      next: (data) => (this.aircrafts = data),
      error: (err) => (this.error = err.message),
      complete: () => (this.error = null),
    });
  }
  getDesignedAircrafts() {}

  getDevelopmentAircrafts() {}
}
