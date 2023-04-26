import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  name = 'Count';
  currentSeconds = 60;
  count$ = interval(1000).pipe(
    map(count => this.format(count + this.currentSeconds * 1000)));

    format(seconds: number): string {
      return new Date(seconds + +new Date()-50000).toLocaleString('en-EN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    }
}
