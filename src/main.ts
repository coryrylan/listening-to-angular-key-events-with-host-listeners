import { Component, HostListener } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

export enum KEY_CODE {
  RIGHT_ARROW = 'ArrowRight',
  LEFT_ARROW = 'ArrowLeft'
}

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Host Listeners and Key Events</h1>

    <p>
      <a href="https://coryrylan.com/blog/listening-to-angular-key-events-with-host-listeners"></a>
    </p>

    <button (click)="decrement()">-</button>
    {{value}}
    <button (click)="increment()">+</button>

    <br><br>

    <a href="https://coryrylan.com/blog/listening-to-angular-key-events-with-host-listeners">Blog Post coryrylan.com</a>
  `,
})
export class App {
  value = 0;
  constructor() { }
  
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);
    
    if (event.key === KEY_CODE.RIGHT_ARROW) {
      this.increment();
    }

    if (event.key === KEY_CODE.LEFT_ARROW) {
      this.decrement();
    }
  }
  
  increment() {
    this.value++;
  }
  
  decrement() {
    this.value--;
  }
}

bootstrapApplication(App);
