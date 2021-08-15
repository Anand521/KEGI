import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkVisitQuotedDetailsComponent } from './work-visit-quoted-details.component';

describe('WorkVisitQuotedDetailsComponent', () => {
  let component: WorkVisitQuotedDetailsComponent;
  let fixture: ComponentFixture<WorkVisitQuotedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkVisitQuotedDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkVisitQuotedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
