import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: './feature/dashboard/dashboard.module#DashboardModule' },
  { path: 'description/:issueNumber', loadChildren: './feature/description/description.module#DescriptionModule' },
  { path: 'resetPassword/:userId', loadChildren: './feature/authentication/reset-password/reset-password.module#ResetPasswordModule' },
  { path: '**', loadChildren: './feature/authentication/authentication.module#AuthenticationModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
