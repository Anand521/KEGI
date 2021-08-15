import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkVisitConfirmedComponent } from './work-visit-confirmed.component';

describe('WorkVisitConfirmedComponent', () => {
  let component: WorkVisitConfirmedComponent;
  let fixture: ComponentFixture<WorkVisitConfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkVisitConfirmedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkVisitConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
