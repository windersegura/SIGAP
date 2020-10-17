import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuyentesManagerComponent } from './contribuyentes-manager.component';

describe('ContribuyentesManagerComponent', () => {
  let component: ContribuyentesManagerComponent;
  let fixture: ComponentFixture<ContribuyentesManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContribuyentesManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContribuyentesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
