import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-greet',
  template: `
  <h1>Greetings </h1>
  <h2>{{greetMessage}}</h2>
  <button (click)='greet()'>saySomthing</button>
  `

})
export class GreetComponent implements OnInit {

  @Input() greetMessage: string;
  @Output() sendMessageEvent = new EventEmitter();

  constructor() { }
  ngOnInit(): void {
  }

  greet(): void {
    this.sendMessageEvent.emit('Hello From Greet Component');
  }
}

@NgModule({
  declarations: [GreetComponent],
  imports: [
    CommonModule
  ]
})
class GreetModule { }
