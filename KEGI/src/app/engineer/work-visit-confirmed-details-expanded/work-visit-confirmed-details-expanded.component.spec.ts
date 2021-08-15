import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkVisitConfirmedDetailsExpandedComponent } from './work-visit-confirmed-details-expanded.component';

describe('WorkVisitConfirmedDetailsExpandedComponent', () => {
  let component: WorkVisitConfirmedDetailsExpandedComponent;
  let fixture: ComponentFixture<WorkVisitConfirmedDetailsExpandedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkVisitConfirmedDetailsExpandedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkVisitConfirmedDetailsExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
