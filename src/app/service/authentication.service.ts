import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LOGIN_API } from '../const/service.const';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  
  constructor(private _http: HttpClient) {}

  login(request: any) {
    return this._http
      .post(LOGIN_API, request)
      .toPromise()
      .then((data) => data)
      .catch((err) => err);
  }
}
