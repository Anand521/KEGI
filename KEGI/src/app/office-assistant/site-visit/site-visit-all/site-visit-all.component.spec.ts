import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteVisitAllComponent } from './site-visit-all.component';

describe('SiteVisitAllComponent', () => {
  let component: SiteVisitAllComponent;
  let fixture: ComponentFixture<SiteVisitAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteVisitAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteVisitAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
