import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContribuyentesListComponent } from './dialog-contribuyentes-list.component';

describe('DialogContribuyentesListComponent', () => {
  let component: DialogContribuyentesListComponent;
  let fixture: ComponentFixture<DialogContribuyentesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogContribuyentesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContribuyentesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
