import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogViviendasListComponent } from './dialog-viviendas-list.component';

describe('DialogViviendasListComponent', () => {
  let component: DialogViviendasListComponent;
  let fixture: ComponentFixture<DialogViviendasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogViviendasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogViviendasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
