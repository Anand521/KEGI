import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkVisitQuotedComponent } from './work-visit-quoted.component';

describe('WorkVisitQuotedComponent', () => {
  let component: WorkVisitQuotedComponent;
  let fixture: ComponentFixture<WorkVisitQuotedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkVisitQuotedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkVisitQuotedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
