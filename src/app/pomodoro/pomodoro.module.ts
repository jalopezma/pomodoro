import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PomodoroRoutingModule } from './pomodoro-routing.module';

// components
import { TimerComponent } from './components/timer/timer.component';

@NgModule({
  imports: [
    SharedModule,
    PomodoroRoutingModule
  ],
  declarations: [
    TimerComponent,
  ],
  exports: [
    TimerComponent,
  ]
})
export class PomodoroModule { }
