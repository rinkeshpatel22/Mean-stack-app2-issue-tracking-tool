import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  public password: string;
  public userId: string;
  public confirmPassword: string;
  public email: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.params ? this.activatedRoute.snapshot.params.userId : null;
    if (!this.userId) {
      this.router.navigate(['']);
    }
  }

  public resetPassword(): void {
    if (this.password === this.confirmPassword) {
      const data = {
        userId: this.userId,
        password: this.password,
        email: this.email
      };
      this.authService.resetPassword(data).subscribe((response) => {
        if (response.status === 200) {
          this.toastr.success('password changed successfully');
          this.router.navigate(['']);
        } else {
          this.toastr.error(response.message);
        }
      }, (err) => {
        this.toastr.error(err.message);
      });
    } else {
      this.toastr.warning('password not matched with confirmed password');
    }
  }

}
