import { Component, Input, Output, EventEmitter, AfterContentChecked, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'pm-timer',
  templateUrl: './timer.component.html',
})
export class TimerComponent implements AfterContentChecked, OnDestroy {

  @Input() timerLength: number = 0.1 * 60; // 20 min
  @Input() breakLength: number = 0.2 * 60; // 5 min
  @Input() lastBreakLength: number = 15 * 60; // 15 min

  @Output() timerFinished: EventEmitter<any> = new EventEmitter<any>();
  @Output() breakFinished: EventEmitter<any> = new EventEmitter<any>();
  @Output() cycleFinished: EventEmitter<any> = new EventEmitter<any>();

  public minutes = '';
  public seconds = '';
  public progress = 0.0;

  private actualTimer: number = this.timerLength;
  private timerInterval = null;
  private actualStep = 0;

  constructor() { }

  ngAfterContentChecked() {
    this.setCountdown();
  }

  ngOnDestroy() {
    this.cleanInterval();
  }

  private processTimer() {
    this.actualTimer--;
    if (this.actualTimer > 0) {
      this.setCountdown();
      this.setProgress();
    } else {
      this.onFinish();
    }
  }

  private setCountdown() {
    const minutes = Math.floor(this.actualTimer / 60);
    this.minutes = '' + minutes;
    const seconds = this.actualTimer - (minutes * 60);
    this.seconds = (seconds < 10) ? '0' + seconds : '' + seconds;
  }

  private setInterval() {
    this.timerInterval = setInterval(() => this.processTimer(), 1000);
  }

  public onPlay() {
    this.setInterval();
  }

  public onPause() {
    this.cleanInterval();
  }

  public onReset() {
    this.cleanInterval();
    if (this.actualStep % 2 === 0) {
      this.resetPomodoro();
    } else {
      this.resetBreak();
    }
    this.setCountdown();
    this.setProgress();
  }

  private cleanInterval() {
    clearInterval(this.timerInterval);
    this.timerInterval = null;
  }

  private setProgress() {
    const timerLength = this.isPomodoro() ? this.timerLength : this.breakLength;
    this.progress = 100 - ((this.actualTimer * 100) / timerLength);
  }

  private resetPomodoro() {
    this.actualTimer = this.timerLength;
  }

  private resetBreak() {
    this.actualTimer = this.breakLength;
  }

  private onFinish() {
    this.cleanInterval();
    this.progress = 100;
    if (this.isPomodoro()) {
      this.timerFinished.emit();
      this.actualTimer = this.breakLength;
    } else {
      this.breakFinished.emit();
      this.actualTimer = this.timerLength;
    }

    this.actualStep++;
    this.setCountdown();

    this.setProgress();
  }

  private isPomodoro(): boolean {
    return this.actualStep % 2 === 0;
  }
}
