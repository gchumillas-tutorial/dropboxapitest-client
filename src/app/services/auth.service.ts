import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment as env } from '../../environments/environment';

@Injectable()
export class AuthService {
  constructor(private _http: HttpClient) { }

  async authUrl() {
    return await this._http.get<string>(
      `${env.apiUrl}/auth-url`, { withCredentials: true }
    ).toPromise();
  }

  async login(state: string, code: string) {
    const params = new HttpParams()
      .set('state', state)
      .set('code', code);

    return await this._http.post<null>(
      `${env.apiUrl}/auth-login`,
      null,
      { withCredentials: true, params }
    ).toPromise();
  }

  async isLogged() {
    return await this._http.get<boolean>(
      `${env.apiUrl}/auth-logged`,
      { withCredentials: true }
    ).toPromise();
  }

  async logout() {
    return await this._http.post<null>(
      `${env.apiUrl}/auth-logout`,
      null,
      { withCredentials: true }
    ).toPromise();
  }
}
