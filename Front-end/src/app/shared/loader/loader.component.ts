import { Component } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  // loading bar to show on waithing of every http api call response
  public isLoading = false;

  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe(value => {
      this.isLoading = value;
    });
  }
}
