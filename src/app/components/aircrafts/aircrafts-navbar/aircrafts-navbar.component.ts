import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AircraftsActionsTypes } from 'src/app/model/action.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
@Component({
  selector: 'app-aircrafts-navbar',
  templateUrl: './aircrafts-navbar.component.html',
  styleUrls: ['./aircrafts-navbar.component.css'],
})
export class AircraftsNavbarComponent implements OnInit {
  @Output() eventEmitter: EventEmitter<any> = new EventEmitter();

  searchForm = this.fb.group({
    searchValue: [''],
  });
  constructor(private fb: FormBuilder, private eventService: EventService) {}

  ngOnInit(): void {}

  // lorsque l'utilisateur clic sur le bouton l'action corespondante est PUBLIEE
  getAllAircrafts() {
    this.eventService.publishEvent({
      type: AircraftsActionsTypes.GET_ALL_AIRCRAFTS,
      payload: null,
    });
    // this.eventEmitter.emit({
    //   type: AircraftsActionsTypes.GET_ALL_AIRCRAFTS,
    //   payload: null,
    // });
  }

  onSearch(value: any) {
    console.log(value.value.searchValue);
    this.eventEmitter.emit({
      type: AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS,
      payload: value.value.searchValue,
    });
  }
  getDesignedAircrafts() {}

  getDevelopmentAircrafts() {}
}
