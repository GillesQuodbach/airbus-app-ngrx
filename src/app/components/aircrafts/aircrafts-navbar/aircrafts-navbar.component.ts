import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AircraftsActionsTypes } from 'src/app/model/action.model';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  constructor(private fb: FormBuilder) {}

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

  searchAircrafts(form: FormGroup) {
    console.log(form.value.searchValue);
  }
}
