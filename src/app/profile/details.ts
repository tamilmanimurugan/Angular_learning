import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <h3>User Details</h3>

    <p><b>Name:</b> Tamilmani</p>
    <p><b>Age:</b> 22</p>
    <p><b>City:</b> Chennai</p>

    <h4>Skills</h4>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>Angular</li>
    </ul>
  `
})
export class Details {}