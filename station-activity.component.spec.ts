import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationActivityComponent } from './station-activity.component';

describe('StationActivityComponent', () => {
  let component: StationActivityComponent;
  let fixture: ComponentFixture<StationActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
