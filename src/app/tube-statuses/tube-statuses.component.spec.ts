import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TubeStatusesComponent } from './tube-statuses.component';

describe('TubeStatusesComponent', () => {
  let component: TubeStatusesComponent;
  let fixture: ComponentFixture<TubeStatusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TubeStatusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TubeStatusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
