import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AircraftsActionsTypes,
  GetAllAircraftsAction,
  GetDesignedAircraftsAction,
} from 'src/app/ngrx/aircrafts.actions';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { Store } from '@ngrx/store';
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
  constructor(private fb: FormBuilder, private store: Store<any>) {}

  ngOnInit(): void {}

  // lorsque l'utilisateur clic sur le bouton l'action corespondante est PUBLIEE
  getAllAircrafts() {
    this.store.dispatch(new GetAllAircraftsAction({}));
  }

  onSearch(value: any) {
    console.log(value.value.searchValue);
    this.eventEmitter.emit({
      type: AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS,
      payload: value.value.searchValue,
    });
  }
  getDesignedAircrafts() {
    this.store.dispatch(new GetDesignedAircraftsAction({}));
  }

  getDevelopmentAircrafts() {}
}
