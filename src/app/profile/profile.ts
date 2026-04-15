import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss']
})
export class Profile {
  // IF condition variable
  isPositive: boolean = true;
  isChecked: boolean = false;
  // String array ,for of loop
  names: string[] = ['Ram', 'Sam', 'Ravi'];

  // Number array
  numbers: number[] = [1, 2, 3, 4];

  // Object array
  users = [
    { id: 1, name: 'Tamil', email: 'tamil@gmail.com' },
    { id: 2, name: 'Arun', email: 'arun@gmail.com' },
    { id: 3, name: 'Kumar', email: 'kumar@gmail.com' }
  ];

  // for in Object loop
  userObj: any = {
    Name: 'Tamilmani',
    Age: 22,
    city: 'Chennai'
  };

}