import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '../../../shared/shared.module';
import { TimerComponent } from './timer.component';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerComponent ],
      imports: [
        SharedModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * add testing:
   * init with correct value.
   * on finish
   * on rest
   * on pause
   * on start
   */
});
