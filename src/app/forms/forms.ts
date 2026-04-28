import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './forms.html',
  styleUrls: ['./forms.scss']
})
export class Forms {

  // 🔴 Reactive Form
  myForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  onSubmit() {
    if (this.myForm.valid) {
      console.log("Reactive Login:", this.myForm.value);
      alert("Reactive Login Success ✅");
    } else {
      alert("Reactive Form Invalid ❌");
    }
  }

  // 🟢 Template Form
  onTemplateSubmit(form: any) {
    if (form.valid) {
      console.log("Template Login:", form.value);
      alert("Template Login Success ✅");
    } else {
      alert("Template Form Invalid ❌");
    }
  }
}