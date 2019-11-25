import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoEvaluarComponent } from './punto-evaluar.component';

describe('PuntoEvaluarComponent', () => {
  let component: PuntoEvaluarComponent;
  let fixture: ComponentFixture<PuntoEvaluarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoEvaluarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoEvaluarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
