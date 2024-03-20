import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  constructor(private http: HttpClient) {}

  public checkEmail(email: string): Observable<boolean> {
    return this.http
      .get<User[]>(environment.host + '/users')
      .pipe(map((users) => users.some((user) => user.email === email)));
  }

  public getUsers(email: string): Observable<User[]> {
    return this.http.get<User[]>(environment.host + `/users?email=${email}`);
  }
}
