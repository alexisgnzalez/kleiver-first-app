import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() myText: string = 'vaina inicial';

  constructor() {
    console.log("texto en constructor: ", this.myText);
  }

  ngOnInit(): void {
    console.log("texto en ngOnInit: ", this.myText);
  }

}
