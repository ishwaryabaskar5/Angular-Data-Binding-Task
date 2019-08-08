import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

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
