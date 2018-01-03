import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PomodoroContainerComponent } from './pomodoro-container.component';

describe('PomodoroContainerComponent', () => {
  let component: PomodoroContainerComponent;
  let fixture: ComponentFixture<PomodoroContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PomodoroContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PomodoroContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
