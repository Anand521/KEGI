import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkVisitAssignedDetailsComponent } from './work-visit-assigned-details.component';

describe('WorkVisitAssignedDetailsComponent', () => {
  let component: WorkVisitAssignedDetailsComponent;
  let fixture: ComponentFixture<WorkVisitAssignedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkVisitAssignedDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkVisitAssignedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
