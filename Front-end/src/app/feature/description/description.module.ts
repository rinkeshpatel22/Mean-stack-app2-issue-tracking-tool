import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from './description.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DescriptionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DescriptionComponent }]),
    SharedModule
  ]
})
export class DescriptionModule { }
