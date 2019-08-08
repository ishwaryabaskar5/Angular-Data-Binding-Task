import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  public message = '';
  // Output directive
  // instance of EventEmitter
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // emit message value as an event
   fireEvent() {
    this.childEvent.emit(this.message);
  }

}
