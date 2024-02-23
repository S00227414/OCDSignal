import { Injectable, signal, WritableSignal, computed, Signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  count: WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);
 
  constructor() { }
 
  increment() {
    this.count.update((value) => value+1);
    console.log(this.count());
  }
 
  decrement() {
    if (this.count()>0)
      this.count.update((value) => value-1);
  }
 
  getCount() {
    return this.count();
  }
 
 
}