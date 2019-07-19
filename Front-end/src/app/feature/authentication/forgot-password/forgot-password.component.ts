import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public email: string;
  constructor(
    public authService: AuthService,
    public router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  public forgotPassword(): void {
    if (!this.email) {
      this.toastr.warning('email required');
    } else {
      const data = {
        email: this.email
      };
      this.authService.forgotPassword(data)
        .subscribe((response) => {
          if (response.status === 200) {
            setTimeout(() => {
              this.toastr.success('Password reset link sent to your email id');
              this.router.navigate(['']);
            }, 1000);
          } else {
            this.toastr.error(response.message);
          }
        });
    }
  }

}
