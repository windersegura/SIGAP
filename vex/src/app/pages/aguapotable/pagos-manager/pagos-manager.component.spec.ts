import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosManagerComponent } from './pagos-manager.component';

describe('PagosManagerComponent', () => {
  let component: PagosManagerComponent;
  let fixture: ComponentFixture<PagosManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagosManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagosManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
