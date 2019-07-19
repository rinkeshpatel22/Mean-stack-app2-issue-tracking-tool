import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(
    public toastr: ToastrService,
    private router: Router
  ) { }
 // intercept every http calls and handle api error
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err && err.status) {
        switch (err.status) {
          case 500:
            this.toastr.error(err.message);
            this.router.navigate(['']);
            break;
          case 401:
            this.toastr.error(err.error.message);
            this.router.navigate(['']);
            break;
          case 400:
          case 404:
            this.toastr.error(err.error.message);
            break;
          default:
            this.toastr.error('Internal Server Error');
            this.router.navigate(['']);
            break;
        }
      } else {
        this.toastr.error('Internal Server Error');
        this.router.navigate(['']);
      }
      return of(err);
    }));
  }
}
