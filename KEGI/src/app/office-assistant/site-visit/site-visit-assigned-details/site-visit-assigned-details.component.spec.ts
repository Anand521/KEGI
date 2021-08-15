import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteVisitAssignedDetailsComponent } from './site-visit-assigned-details.component';

describe('SiteVisitAssignedDetailsComponent', () => {
  let component: SiteVisitAssignedDetailsComponent;
  let fixture: ComponentFixture<SiteVisitAssignedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteVisitAssignedDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteVisitAssignedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
