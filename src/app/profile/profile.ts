import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss']
})
export class Profile {
  isPositive = true;
  isChecked = false;

  names = ['Ram', 'Sam', 'Ravi'];
  numbers = [1, 2, 3, 4];

  users = [
    { id: 1, name: 'Tamil', email: 'tamil@gmail.com' },
    { id: 2, name: 'Arun', email: 'arun@gmail.com' },
    { id: 3, name: 'Kumar', email: 'kumar@gmail.com' }
  ];

  userObj: any = {
    Name: 'Tamilmani',
    Age: 22,
    city: 'Chennai'
  };
}