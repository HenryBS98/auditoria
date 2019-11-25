import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntosEvaluarComponent } from './puntos-evaluar.component';

describe('PuntosEvaluarComponent', () => {
  let component: PuntosEvaluarComponent;
  let fixture: ComponentFixture<PuntosEvaluarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntosEvaluarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntosEvaluarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
