import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { HttpClient } from '@angular/common/http';
import { Cookie } from 'ng2-cookies';
import { Subject } from 'rxjs';
import { CookieConstants } from '../../constants/cookie.constants';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private userId: string;
  private componentMethodCallSource = new Subject<any>();
  public componentMethodCalled$ = this.componentMethodCallSource.asObservable();
  public socket;
  public url;

  constructor(public http: HttpClient) {
    this.url = localStorage.getItem('API_BASE_URL');
    this.socket = io(this.url);
    this.userId = Cookie.get(CookieConstants.activeUserId);
    this.socket.on(this.userId, (data) => {
      this.callComponentMethod(data);
    });
  }
  // emit issue notifications
  public notifyUpdates(notificationReceivers) {
    this.socket.emit('issue-notifications', notificationReceivers);
  }

  // call component method to show notification modal.
  private callComponentMethod(data): void {
    this.componentMethodCallSource.next(data);
  }
}
