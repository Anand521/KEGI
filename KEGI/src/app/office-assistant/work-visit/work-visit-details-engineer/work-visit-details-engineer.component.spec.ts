import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkVisitDetailsEngineerComponent } from './work-visit-details-engineer.component';

describe('WorkVisitDetailsEngineerComponent', () => {
  let component: WorkVisitDetailsEngineerComponent;
  let fixture: ComponentFixture<WorkVisitDetailsEngineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkVisitDetailsEngineerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkVisitDetailsEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
