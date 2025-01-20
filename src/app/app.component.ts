import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { CameraSelectorComponent } from './components/camera-selector/camera-selector.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CountdownTimerComponent, CameraSelectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '6crickets-interview-project';
}
