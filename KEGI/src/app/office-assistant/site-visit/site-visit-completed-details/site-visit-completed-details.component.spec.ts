import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteVisitCompletedDetailsComponent } from './site-visit-completed-details.component';

describe('SiteVisitCompletedDetailsComponent', () => {
  let component: SiteVisitCompletedDetailsComponent;
  let fixture: ComponentFixture<SiteVisitCompletedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteVisitCompletedDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteVisitCompletedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
