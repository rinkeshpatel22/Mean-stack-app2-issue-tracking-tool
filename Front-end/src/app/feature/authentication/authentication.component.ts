import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  public isResetPassWord = false;
  public isForgatePassword = false;
  public currentUrl: string;
  public userId: string;

  constructor() { }

  ngOnInit() {
  }

}
