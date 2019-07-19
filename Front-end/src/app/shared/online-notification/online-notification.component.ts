import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { SocketService } from 'src/app/core/services/socket/socket.service';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies';
import { CookieConstants } from 'src/app/core/constants/cookie.constants';
import { UrlConstants } from 'src/app/core/constants/url.constants';

@Component({
  selector: 'app-online-notification',
  templateUrl: './online-notification.component.html',
  styleUrls: ['./online-notification.component.scss']
})
export class OnlineNotificationComponent implements OnInit {

  public onlineNotificationModalRef: BsModalRef;
  public onlineNotificationData;
  @ViewChild('onlineNotificationTemplate', null) onlineNotificationTemplate: TemplateRef<any>;

  constructor(
    private socketService: SocketService,
    private modalService: BsModalService,
    private router: Router
  ) {
    this.socketService.componentMethodCalled$.subscribe(
      (onlineNotificationData) => {
        if (this.onlineNotificationModalRef === undefined &&
          onlineNotificationData.updatedBy !== Cookie.get(CookieConstants.activeUserId)) {
          this.onlineNotificationData = onlineNotificationData;
          this.onlineNotificationModalRef = this.modalService.show(this.onlineNotificationTemplate);
        }
      }
    );
  }

  ngOnInit() {
  }

  // on click any notification, navigate to description of that issue
  public openIssueDescription(): void {
    if (this.onlineNotificationModalRef !== undefined) {
      this.onlineNotificationModalRef.hide();
      this.onlineNotificationModalRef = undefined;
    }
    location.reload();
    this.router.navigate([UrlConstants.description + this.onlineNotificationData.issueNumber]);
  }

  // close the notification modal
  public closeModal(): void {
    if (this.onlineNotificationModalRef !== undefined) {
      this.onlineNotificationModalRef.hide();
      this.onlineNotificationModalRef = undefined;
    }
  }
}
