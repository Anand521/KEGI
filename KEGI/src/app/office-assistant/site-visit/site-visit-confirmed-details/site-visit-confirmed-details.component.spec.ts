import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteVisitConfirmedDetailsComponent } from './site-visit-confirmed-details.component';

describe('SiteVisitConfirmedDetailsComponent', () => {
  let component: SiteVisitConfirmedDetailsComponent;
  let fixture: ComponentFixture<SiteVisitConfirmedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteVisitConfirmedDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteVisitConfirmedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
