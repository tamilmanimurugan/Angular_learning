import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule], 
  template: `
    <h3>Settings Page</h3>

    <label>Name:</label><br>
    <input [(ngModel)]="name" name="name" placeholder="Enter name" /><br><br>

    <label>Email:</label><br>
    <input [(ngModel)]="email" name="email" placeholder="Enter email" /><br><br>

    <button (click)="save()">Save</button>

    <p *ngIf="saved"> Saved Successfully!</p>
    `
})
export class SettingsChild {
  name = '';
  email = '';
  saved = false;

  save() {
    this.saved = true;
  }
}