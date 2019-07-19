import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { SignUpPayload } from 'src/app/core/interfaces/signUpPayload';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  public firstName: any;
  public lastName: any;
  public email: any;
  public password: any;

  constructor(
    public authService: AuthService,
    public router: Router,
    private toastr: ToastrService) { }

  public signUp: any = () => {
    // validate signup form and call service method for api call of signup
    if (!this.firstName) {
      this.toastr.warning('first name required');
    } else if (!this.lastName) {
      this.toastr.warning('last name required');
    } else if (!this.email) {
      this.toastr.warning('email id required');
    } else if (!this.password) {
      this.toastr.warning('password required');
    } else {
      const data: SignUpPayload = {
        userName: `${this.firstName} ${this.lastName}`,
        email: this.email,
        password: this.password
      };
      this.authService.signUp(data)
        .subscribe((apiResponse) => {
          if (apiResponse.status === 200) {
            this.toastr.success('Signup successful');
            setTimeout(() => {
              this.router.navigate(['']);
            }, 1000);
          } else {
            this.toastr.error(apiResponse.message);
          }
        }, (err) => {
          this.toastr.error('some error occured');
        });
    }
  }
}
