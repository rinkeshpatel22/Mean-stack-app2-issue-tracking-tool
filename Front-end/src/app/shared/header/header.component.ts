import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cookie } from 'ng2-cookies';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { CookieConstants } from 'src/app/core/constants/cookie.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public authToken: string;
  public activeUser: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const name = 'name';
    const currentComponent = this.activatedRoute.snapshot.component[name];
    if (currentComponent === 'AuthenticationComponent' || currentComponent === 'ResetPasswordComponent') {
      this.authToken = null;
      this.activeUser = null;
    } else {
      this.authToken = Cookie.get(CookieConstants.authToken);
      if (!this.authToken) {
        this.router.navigate(['']);
      } else {
        this.activeUser = Cookie.get(CookieConstants.activeUserName);
      }
    }
    // call logout function on click of browser back url
    window.onpopstate = () => {
      this.logout();
    };
  }

  public logout(): void {
    this.authService.logout()
      .subscribe((apiResponse) => {
        if (apiResponse.status === 200) {
          Cookie.deleteAll();
          this.authToken = null;
          this.activeUser = null;
          this.router.navigate(['']);
        } else {
          Cookie.deleteAll();
          this.toastr.error(apiResponse.message);
        }
      }, (err) => {
        Cookie.deleteAll();
        this.toastr.error('some error occured');
      });
  }
}
