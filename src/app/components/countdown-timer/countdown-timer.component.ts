import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { DeadlineService } from '../../services/deadline/deadline.service';
import { Deadline } from '../../../types/deadline.class';
import { interval, Subscription } from 'rxjs';
import { CommonModule, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-countdown-timer',
  imports: [CommonModule],
  providers: [DecimalPipe],
  templateUrl: './countdown-timer.component.html',
  styleUrl: './countdown-timer.component.scss',
  standalone: true
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  @Input() deadlineId: number = 1; 

  isLoaded = false;
  deadlineDate = new Date();
  deadlineValue = 300
  deadline: Deadline;
  now = new Date(Date.now());
  svcSub: Subscription = new Subscription();
  timerSub: Subscription = new Subscription();

  constructor(
    private deadlineService: DeadlineService = inject(DeadlineService)
  ){
    let defaultDate = new Date(Date.now());
    defaultDate.setHours(defaultDate.getHours() + 1);
    this.deadline = new Deadline(0,defaultDate.toUTCString(),'Default Deadline');
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.svcSub = this.deadlineService.getDeadline(this.deadlineId).subscribe(
      value => {
        if(value != null){
          this.deadline = value;
        }
        this.deadlineValue = Number((new Date(this.deadline.dateTimeGMT).getTime() - this.now.getTime()/ 1000).toFixed(0));
        this.isLoaded = true;
      }
    );

    this.timerSub = interval(1000).subscribe(x => {
      this.deadlineValue -= 1;
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.timerSub.unsubscribe();
    this.svcSub.unsubscribe();
  }

}
