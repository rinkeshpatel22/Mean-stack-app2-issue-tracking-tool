import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineNotificationComponent } from './online-notification.component';

describe('OnlineNotificationComponent', () => {
  let component: OnlineNotificationComponent;
  let fixture: ComponentFixture<OnlineNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
