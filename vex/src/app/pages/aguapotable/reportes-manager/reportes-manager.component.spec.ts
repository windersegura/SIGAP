import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesManagerComponent } from './reportes-manager.component';

describe('ReportesManagerComponent', () => {
  let component: ReportesManagerComponent;
  let fixture: ComponentFixture<ReportesManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
