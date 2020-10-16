import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuyentesListComponent } from './contribuyentes-list.component';

describe('ContribuyentesListComponent', () => {
  let component: ContribuyentesListComponent;
  let fixture: ComponentFixture<ContribuyentesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContribuyentesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContribuyentesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
