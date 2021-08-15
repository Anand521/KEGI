import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkVisitAssignedComponent } from './work-visit-assigned.component';

describe('WorkVisitAssignedComponent', () => {
  let component: WorkVisitAssignedComponent;
  let fixture: ComponentFixture<WorkVisitAssignedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkVisitAssignedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkVisitAssignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
