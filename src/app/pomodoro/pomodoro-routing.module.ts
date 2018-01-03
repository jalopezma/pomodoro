import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PomodoroContainerComponent } from './containers/pomodoro-container/pomodoro-container.component';

const routes: Routes = [
  {path: 'timer', component: PomodoroContainerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PomodoroRoutingModule { }
