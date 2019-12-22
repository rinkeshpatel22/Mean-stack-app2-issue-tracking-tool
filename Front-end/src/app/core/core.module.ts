import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesModule } from './services/services.module';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ConfigService } from './services/config/config.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ServicesModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (configService: ConfigService) => () => configService.getConfig(),
      deps: [ConfigService],
      multi: true
    }]
})
export class CoreModule { }
