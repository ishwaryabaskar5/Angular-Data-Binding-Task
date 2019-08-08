import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  // getting parentData from parent (component1) using input decorator
  @Input() public parentData;

  constructor() { }

  ngOnInit() {
  }

}
