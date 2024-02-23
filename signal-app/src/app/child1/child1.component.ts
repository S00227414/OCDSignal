import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
constructor(private sigService:CounterService){}

getCount(){
 return this.sigService.getCount();
}
}