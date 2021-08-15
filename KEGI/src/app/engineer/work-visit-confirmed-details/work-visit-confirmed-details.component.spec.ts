import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkVisitConfirmedDetailsComponent } from './work-visit-confirmed-details.component';

describe('WorkVisitConfirmedDetailsComponent', () => {
  let component: WorkVisitConfirmedDetailsComponent;
  let fixture: ComponentFixture<WorkVisitConfirmedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkVisitConfirmedDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkVisitConfirmedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
