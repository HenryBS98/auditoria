import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoEvaluarListComponent } from './punto-evaluar-list.component';

describe('PuntoEvaluarListComponent', () => {
  let component: PuntoEvaluarListComponent;
  let fixture: ComponentFixture<PuntoEvaluarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoEvaluarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoEvaluarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
