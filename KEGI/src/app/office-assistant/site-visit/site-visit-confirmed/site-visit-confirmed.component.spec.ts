import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteVisitConfirmedComponent } from './site-visit-confirmed.component';

describe('SiteVisitConfirmedComponent', () => {
  let component: SiteVisitConfirmedComponent;
  let fixture: ComponentFixture<SiteVisitConfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteVisitConfirmedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteVisitConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
