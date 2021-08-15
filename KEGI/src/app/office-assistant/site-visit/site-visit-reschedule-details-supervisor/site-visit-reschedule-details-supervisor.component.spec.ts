import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteVisitRescheduleDetailsSupervisorComponent } from './site-visit-reschedule-details-supervisor.component';

describe('SiteVisitRescheduleDetailsSupervisorComponent', () => {
  let component: SiteVisitRescheduleDetailsSupervisorComponent;
  let fixture: ComponentFixture<SiteVisitRescheduleDetailsSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteVisitRescheduleDetailsSupervisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteVisitRescheduleDetailsSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
