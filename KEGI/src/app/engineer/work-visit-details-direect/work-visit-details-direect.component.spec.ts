import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkVisitDetailsDireectComponent } from './work-visit-details-direect.component';

describe('WorkVisitDetailsDireectComponent', () => {
  let component: WorkVisitDetailsDireectComponent;
  let fixture: ComponentFixture<WorkVisitDetailsDireectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkVisitDetailsDireectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkVisitDetailsDireectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
