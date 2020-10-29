import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViviendaListComponent } from './vivienda-list.component';

describe('ViviendaListComponent', () => {
  let component: ViviendaListComponent;
  let fixture: ComponentFixture<ViviendaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViviendaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViviendaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
