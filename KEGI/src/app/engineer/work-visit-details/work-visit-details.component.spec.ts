import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkVisitDetailsComponent } from './work-visit-details.component';

describe('WorkVisitDetailsComponent', () => {
  let component: WorkVisitDetailsComponent;
  let fixture: ComponentFixture<WorkVisitDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkVisitDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkVisitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
