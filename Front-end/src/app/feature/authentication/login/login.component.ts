import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CookieConstants } from 'src/app/core/constants/cookie.constants';
import { LoginPayload } from 'src/app/core/interfaces/loginPayload';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  public login: any = () => {
    if (!this.email) {
      this.toastr.warning('email required');
    } else if (!this.password) {
      this.toastr.warning('password required');
    } else {
      const data: LoginPayload = {
        email: this.email,
        password: this.password
      };
      this.authService.onLogin(data)
        .subscribe((apiResponse) => {
          if (apiResponse.status === 200) {
            Cookie.deleteAll();
            Cookie.set(CookieConstants.activeUserId, apiResponse.data.userDetails.userId);
            Cookie.set(CookieConstants.activeUserEmail, apiResponse.data.userDetails.email);
            Cookie.set(CookieConstants.activeUserName, apiResponse.data.userDetails.userName);
            Cookie.set(CookieConstants.authToken, apiResponse.data.authToken);
            this.router.navigate(['dashboard']);
          } else if (apiResponse.data && apiResponse.data.message) {
            this.toastr.error(apiResponse.data.message);
          } else {
            this.toastr.error('login failed, please try again');
          }
        });
    }
  }
}
