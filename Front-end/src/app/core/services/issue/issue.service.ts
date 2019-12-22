import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cookie } from 'ng2-cookies';
import { CookieConstants } from '../../constants/cookie.constants';
import { ConfigService } from '../config/config.service';
import { UrlConstants } from '../../constants/url.constants';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private apiBaseUrl: string;
  constructor(
    public httpClient: HttpClient,
    public configService: ConfigService
  ) {
    this.apiBaseUrl = localStorage.getItem('API_BASE_URL');
  }

  // get issues api call
  public getIssues(): Observable<any> {
    return this.httpClient.get(`${this.apiBaseUrl}${UrlConstants.ISSUE_READ}`);
  }

  // create issues api call
  public createIssue(data): Observable<any> {
    return this.httpClient.post(this.apiBaseUrl + UrlConstants.ISSUE_CREATE, data);
  }

  // update issues api call
  public updateIssue(data, issueId): Observable<any> {
    return this.httpClient.put(`${this.apiBaseUrl + UrlConstants.ISSUE_UPDATE}${issueId}`, data);
  }

  // delete issues api call
  public deleteIssue(id): Observable<any> {
    return this.httpClient.post(this.apiBaseUrl + UrlConstants.ISSUE_DELETE, { issueId: id });
  }

  // get issue by number api call
  public getIssueByNumber(issueNumber): Observable<any> {
    return this.httpClient.get(`${this.apiBaseUrl + UrlConstants.ISSUE_READ}/${issueNumber}`);
  }

  // file upload - issue attachements api call
  public fileUpload(formData): Observable<any> {
    return this.httpClient.post(this.apiBaseUrl + UrlConstants.FILE_UPLOAD, formData, { reportProgress: true, observe: 'events' });
  }

  // file delete - issue attachements api call
  public fileDelete(fileName): Observable<any> {
    return this.httpClient.delete(`${this.apiBaseUrl + UrlConstants.FILE_DELETE}${fileName}`);
  }

  // get notofocations api call
  public getNotifications(): Observable<any> {
    return this.httpClient.get(`${this.apiBaseUrl + UrlConstants.NOTIFICATION_READ}/${Cookie.get(CookieConstants.activeUserId)}`);
  }

}
