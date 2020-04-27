import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WakeyComponent } from './wakey.component';

describe('WakeyComponent', () => {
  let component: WakeyComponent;
  let fixture: ComponentFixture<WakeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WakeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
