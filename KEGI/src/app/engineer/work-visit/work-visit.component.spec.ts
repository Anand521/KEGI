import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkVisitComponent } from './work-visit.component';

describe('WorkVisitComponent', () => {
  let component: WorkVisitComponent;
  let fixture: ComponentFixture<WorkVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkVisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
