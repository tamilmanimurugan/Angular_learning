import { Component } from '@angular/core';

@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.html',
  styleUrls: ['./task-one.scss']
})

export class TaskOne {
  isDisabled: boolean = true;
  message: string = "";
  name: string = "Tamil";     // Interpolation data
  imageUrl: string = "images/Layer1.png";   // Property binding 
  count: number = 0;       //  Count variable
  
  showMessage() {
    this.message = "Hello " + this.name + "!";
  }

  // Event binding
  showMessage1() {
    alert("Hello, " + this.name + "!");
  }

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