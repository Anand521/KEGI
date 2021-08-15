import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorScheduleComponent } from './supervisor-schedule.component';

describe('SupervisorScheduleComponent', () => {
  let component: SupervisorScheduleComponent;
  let fixture: ComponentFixture<SupervisorScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
