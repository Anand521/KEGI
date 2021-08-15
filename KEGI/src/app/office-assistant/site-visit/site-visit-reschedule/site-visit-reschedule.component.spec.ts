import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteVisitRescheduleComponent } from './site-visit-reschedule.component';

describe('SiteVisitRescheduleComponent', () => {
  let component: SiteVisitRescheduleComponent;
  let fixture: ComponentFixture<SiteVisitRescheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteVisitRescheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteVisitRescheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
