import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'pm-timer',
  templateUrl: './timer.component.html',
})
export class TimerComponent implements AfterViewInit {

  @Input() timerLength: number = 20 * 60; // 20 min
  @Input() breakLength: number = 5 * 60; // 5 min
  @Input() lastBreakLength: number = 15 * 60; // 15 min

  @Output() timerFinished: EventEmitter<any> = new EventEmitter<any>();
  @Output() breakFinished: EventEmitter<any> = new EventEmitter<any>();
  @Output() cycleFinished: EventEmitter<any> = new EventEmitter<any>();

  public minutes = '20';
  public seconds = '00';

  private actualTimer: number = 20 * 60; // 20 min
  private timerInterval = null;

  constructor() { }

  ngAfterViewInit() {
    this.timerInterval = setInterval(() => this.processTimer(), 1000);
  }

  private processTimer() {
    this.actualTimer--;
    if (this.actualTimer > 0) {
      const minutes = Math.floor(this.actualTimer / 60);
      this.minutes = '' + minutes;
      const seconds = this.actualTimer - (minutes * 60);
      this.seconds = (seconds < 10) ? '0' + seconds : '' + seconds;
    } else {
      this.minutes = '0';
      this.seconds = '00';
      clearInterval(this.timerInterval);
      this.timerInterval = null;
      console.log('Interval it\'s on 0');
    }
  }
}
