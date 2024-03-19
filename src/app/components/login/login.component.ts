import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

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

  loginUser() {
    const { email, password } = this.loginForm.value;
    console.log(email);
    console.log(password);
  }
}
