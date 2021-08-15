import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkVisitCompletedComponent } from './work-visit-completed.component';

describe('WorkVisitCompletedComponent', () => {
  let component: WorkVisitCompletedComponent;
  let fixture: ComponentFixture<WorkVisitCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkVisitCompletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkVisitCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
