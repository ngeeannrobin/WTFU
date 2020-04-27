import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendFriendRequestComponent } from './send-friend-request.component';

describe('SendFriendRequestComponent', () => {
  let component: SendFriendRequestComponent;
  let fixture: ComponentFixture<SendFriendRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendFriendRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendFriendRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
