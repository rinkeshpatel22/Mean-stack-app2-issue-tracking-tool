import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlConstants } from '../../constants/url.constants';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private httpClient: HttpClient) { }

  public getConfig(): any {
    return this.httpClient.get(UrlConstants.CONFIG_LOCATION).subscribe(res => {
      localStorage.setItem('API_BASE_URL', res['API_BASE_URL']);
    });
  }
}

