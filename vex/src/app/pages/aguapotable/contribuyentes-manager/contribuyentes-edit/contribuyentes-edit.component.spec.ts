import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuyentesEditComponent } from './contribuyentes-edit.component';

describe('ContribuyentesEditComponent', () => {
  let component: ContribuyentesEditComponent;
  let fixture: ComponentFixture<ContribuyentesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContribuyentesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContribuyentesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
