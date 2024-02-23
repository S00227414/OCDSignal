import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Child1Component, Child2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private counterService: CounterService) {}

  increment() {
    this.counterService.increment();
  }

  decrement() {
    this.counterService.decrement();
  }
}
