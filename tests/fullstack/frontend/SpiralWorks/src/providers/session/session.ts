// import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators'
import 'rxjs/operators/map';
import 'rxjs/Rx';

import { API_URL } from '../../config';
import { IUserNew } from '../../interfaces/user/user-new.interface';
import { ISession } from '../../interfaces/session/session.interface';

/*
  Generated class for the SessionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SessionProvider {

  constructor(public http: Http) {
    console.log('Hello SessionProvider Provider');
  }

  Signup (newUser: IUserNew): Observable<ISession> {
    const headers = new Headers({ 'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this.http.post(`${API_URL}/auth/signup`, newUser, options)
    .map(response => response.json())
    .map(data => this.GetData(data))
  }

  Signin (loginName: string, password: string): Observable<ISession> {
    const headers = new Headers({ 'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this.http.post(`${API_URL}/auth/signin`, {loginName, password}, options)
    .map(response => response.json())
    .map(data => this.GetData(data))
  }

  SignOut () {
    localStorage.clear();
    return Promise.resolve();
  }

  GetData (data) {
    return data.data;
  }

  GetCredentials (): ISession {
    return JSON.parse(localStorage.getItem('session'));
  }
}
