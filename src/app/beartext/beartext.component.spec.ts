import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeartextComponent } from './beartext.component';

describe('BeartextComponent', () => {
  let component: BeartextComponent;
  let fixture: ComponentFixture<BeartextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeartextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeartextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
