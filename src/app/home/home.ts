import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  users = [
    {
      "id": 1,
      "first_name": "Chevy",
      "last_name": "Pikhno",
      "email": "cpikhno0@stanford.edu",
      "gender": "Male",
      "ip_address": "230.124.157.213"
    },

    {
      "id": 3,
      "first_name": "Grete",
      "last_name": "Medlar",
      "email": "gmedlar3@archive.org",
      "gender": "Female",
      "ip_address": "194.28.103.21"
    },

    {
      "id": 2,
      "first_name": "Marlin",
      "last_name": "Lyosik",
      "email": "mlyosik1@ihg.com",
      "gender": "Male",
      "ip_address": "82.139.181.82"
    },

    {
      "id": 4,
      "first_name": "Jolie",
      "last_name": "Caunt",
      "email": "jcaunt2@blinklist.com",
      "gender": "Female",
      "ip_address": "73.24.71.230"
    },

  ]
}