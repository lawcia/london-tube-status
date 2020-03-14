import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TubeStatusDetailComponent } from './tube-status-detail.component';

describe('TubeStatusDetailComponent', () => {
  let component: TubeStatusDetailComponent;
  let fixture: ComponentFixture<TubeStatusDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TubeStatusDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TubeStatusDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
