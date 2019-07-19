import { Injectable } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies';
import { CookieConstants } from '../../constants/cookie.constants';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor() { }

  // intercept evry http request call and add authToken in parameter for authorization
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({ url: request.url + '?authToken=' + Cookie.get(CookieConstants.authToken) });
    return next.handle(request);
  }
}
