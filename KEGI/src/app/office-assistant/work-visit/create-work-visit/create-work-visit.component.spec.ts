import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkVisitComponent } from './create-work-visit.component';

describe('CreateWorkVisitComponent', () => {
  let component: CreateWorkVisitComponent;
  let fixture: ComponentFixture<CreateWorkVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWorkVisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWorkVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
