import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Cookie } from 'ng2-cookies';
import { map } from 'rxjs/operators';
import { SignUpPayload } from '../../interfaces/signUpPayload';
import { LoginPayload } from '../../interfaces/loginPayload';
import { CookieConstants } from '../../constants/cookie.constants';
import { UrlConstants } from '../../constants/url.constants';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public appConfig: any;
  private apiBaseUrl: string;

  constructor(
    private http: HttpClient,
    private configService: ConfigService
  ) {
    this.apiBaseUrl = localStorage.getItem('API_BASE_URL');
  }

  // signup api call
  public signUp(params: SignUpPayload): Observable<any> {
    return this.http.post(this.apiBaseUrl + UrlConstants.SIGNUP, params);
  }

  // login api call
  public onLogin(params: LoginPayload): Observable<any> {
    return this.http.post(this.apiBaseUrl + UrlConstants.LOGIN, params);
  }

  // forgot password api call
  public forgotPassword(data): Observable<any> {
    const params = new HttpParams()
      .set('email', data.email);
    return this.http.post(this.apiBaseUrl + UrlConstants.FORGOT_PASSWORD, params);
  }

  // reset password api call
  public resetPassword(data): Observable<any> {
    const params = new HttpParams()
      .set('userId', data.userId)
      .set('email', data.email)
      .set('password', data.password);
    return this.http.post(this.apiBaseUrl + UrlConstants.RESET_PASSWORD, params);
  }

  // logout api call
  public logout(): Observable<any> {
    const params = new HttpParams()
      .set(CookieConstants.authToken, Cookie.get(CookieConstants.authToken));
    return this.http.post(`${this.apiBaseUrl + UrlConstants.LOGOUT}/${Cookie.get(CookieConstants.activeUserId)}`, params);
  }

  // get users api call
  public getUsers(): Observable<any> {
    return this.http.get(this.apiBaseUrl + UrlConstants.USERS)
      .pipe(map((res: any[]) => res));
  }
}
