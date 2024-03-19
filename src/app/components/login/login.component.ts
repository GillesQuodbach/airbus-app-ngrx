import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AircraftsState } from 'src/app/ngrx/aircrafts.state';

import { GetUserAction } from 'src/app/ngrx/login/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {}

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

  getAllUsers() {
    console.log('hello from get all users');
    this.store.dispatch(new GetUserAction({}));
  }

  loginUser() {
    const { email, password } = this.loginForm.value;
    console.log(email);
    console.log(password);
  }
}
