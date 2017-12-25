import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PomodoroRoutingModule } from './pomodoro-routing.module';

@NgModule({
  imports: [
    SharedModule,
    PomodoroRoutingModule
  ],
  declarations: []
})
export class PomodoroModule { }
