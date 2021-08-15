import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteVisitCompletedComponent } from './site-visit-completed.component';

describe('SiteVisitCompletedComponent', () => {
  let component: SiteVisitCompletedComponent;
  let fixture: ComponentFixture<SiteVisitCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteVisitCompletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteVisitCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
