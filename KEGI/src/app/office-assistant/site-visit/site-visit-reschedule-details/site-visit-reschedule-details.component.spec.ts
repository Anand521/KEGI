import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteVisitRescheduleDetailsComponent } from './site-visit-reschedule-details.component';

describe('SiteVisitRescheduleDetailsComponent', () => {
  let component: SiteVisitRescheduleDetailsComponent;
  let fixture: ComponentFixture<SiteVisitRescheduleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteVisitRescheduleDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteVisitRescheduleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
