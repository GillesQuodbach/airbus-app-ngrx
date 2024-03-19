import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';
import {
  AircraftsState,
  AircraftsStateEnum,
} from 'src/app/ngrx/aircrafts.state';

import { GetUserAction } from 'src/app/ngrx/login/login.actions';
import { DataStateEnum } from 'src/app/state/aircraft.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  useLogged$: Observable<void> | undefined;
  readonly aircraftsStateEnum = AircraftsStateEnum;
  readonly dataStateEnum = DataStateEnum;
  static loginForm: any;
  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetUserAction({}));
  }

  loginForm = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$'),
      ],
    ],
    password: ['', [Validators.required]],
  });

  loginUser() {
    const { email, password } = this.loginForm.value;
    console.log(email);
    console.log(password);
  }
}
