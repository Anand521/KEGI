import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkVisitAllComponent } from './work-visit-all.component';

describe('WorkVisitAllComponent', () => {
  let component: WorkVisitAllComponent;
  let fixture: ComponentFixture<WorkVisitAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkVisitAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkVisitAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
