import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitaPreliminarComponent } from './visita-preliminar.component';

describe('VisitaPreliminarComponent', () => {
  let component: VisitaPreliminarComponent;
  let fixture: ComponentFixture<VisitaPreliminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitaPreliminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitaPreliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
