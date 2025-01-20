import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { CountdownTimerComponent } from './countdown-timer.component';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { DeadlineService } from '../../services/deadline/deadline.service';
import { provideHttpClient } from '@angular/common/http';

describe('CountdownTimerComponent', () => {
  let component: CountdownTimerComponent;
  let fixture: ComponentFixture<CountdownTimerComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountdownTimerComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(),DeadlineService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountdownTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delay display until deadline value is loaded', () => {
    const thisComponent: HTMLElement = fixture.nativeElement;
    let timerContainer = thisComponent.querySelector('div.outer-container');
    expect(timerContainer).toBeNull();
  });

  it('should update every second', fakeAsync(() => {
    const initialValue = component.deadlineValue;
    fixture.detectChanges();
    component.ngOnInit();

    tick(1000);

    expect(component.deadlineValue).not.toEqual(initialValue);
  }));
});


