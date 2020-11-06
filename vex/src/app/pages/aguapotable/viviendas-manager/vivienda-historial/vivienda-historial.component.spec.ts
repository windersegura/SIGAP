import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViviendaHistorialComponent } from './vivienda-historial.component';

describe('ViviendaHistorialComponent', () => {
  let component: ViviendaHistorialComponent;
  let fixture: ComponentFixture<ViviendaHistorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViviendaHistorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViviendaHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
