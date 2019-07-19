import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component';
import { LibrariesModule } from './libraries/libraries.module';
import { IssueFormComponent } from './issue-form/issue-form.component';
import { OnlineNotificationComponent } from './online-notification/online-notification.component';
import { LoaderService } from '../core/services/loader/loader.service';

@NgModule({
  declarations: [IssueFormComponent, LoaderComponent, HeaderComponent, OnlineNotificationComponent],
  imports: [
    CommonModule,
    LibrariesModule
  ],
  exports: [
    IssueFormComponent,
    LoaderComponent,
    HeaderComponent,
    OnlineNotificationComponent,
    LibrariesModule
  ],
  providers: [LoaderService]
})
export class SharedModule { }
