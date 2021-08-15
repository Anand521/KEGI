import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSiteVisitComponent } from './create-site-visit.component';

describe('CreateSiteVisitComponent', () => {
  let component: CreateSiteVisitComponent;
  let fixture: ComponentFixture<CreateSiteVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSiteVisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSiteVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
