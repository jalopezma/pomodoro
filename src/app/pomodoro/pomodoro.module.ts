import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PomodoroRoutingModule } from './pomodoro-routing.module';

// containers
import { PomodoroContainerComponent } from './containers/pomodoro-container/pomodoro-container.component';

// components
import { TimerComponent } from './components/timer/timer.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  imports: [
    SharedModule,
    PomodoroRoutingModule
  ],
  declarations: [
    PomodoroContainerComponent,
    TimerComponent,
    SettingsComponent,
    PomodoroContainerComponent,
  ],
  exports: [
    TimerComponent,
  ]
})
export class PomodoroModule { }
