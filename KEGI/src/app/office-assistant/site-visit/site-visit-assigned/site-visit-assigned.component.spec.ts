import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteVisitAssignedComponent } from './site-visit-assigned.component';

describe('SiteVisitAssignedComponent', () => {
  let component: SiteVisitAssignedComponent;
  let fixture: ComponentFixture<SiteVisitAssignedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteVisitAssignedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteVisitAssignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
