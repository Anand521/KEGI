import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkVisitRescheduleComponent } from './work-visit-reschedule.component';

describe('WorkVisitRescheduleComponent', () => {
  let component: WorkVisitRescheduleComponent;
  let fixture: ComponentFixture<WorkVisitRescheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkVisitRescheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkVisitRescheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
