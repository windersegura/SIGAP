import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViviendasManagerComponent } from './viviendas-manager.component';

describe('ViviendasManagerComponent', () => {
  let component: ViviendasManagerComponent;
  let fixture: ComponentFixture<ViviendasManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViviendasManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViviendasManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
