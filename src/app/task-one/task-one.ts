import { Component } from '@angular/core';

@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.html',
  styleUrls: ['./task-one.scss']
})

export class TaskOne {
  isDisabled: boolean = true;
  showMessage() {
    this.message = "Hello " + this.name + "!";
  }
  message: string = "";

  // Interpolation data
  name: string = "Tamil";

  // Property binding 
  imageUrl: string = "images/Layer 1.png";

  // Event binding
  showMessage1() {
    alert("Hello, " + this.name + "!");
  }

  //  Count variable
  count: number = 0;

  //  Increase count
  increase() {
    this.count++;
  }

  //  Decrease count
  decrease() {
    this.count--;
  }

  //  Reset count
  reset() {
    this.count = 0;
  }

}