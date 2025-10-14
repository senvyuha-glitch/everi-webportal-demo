import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DynamicInput } from '../../../shared/dynamic-input/dynamic-input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule, DynamicInput, MatSlideToggleModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ContactUs {
  form = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    isHuman: new FormControl(false, { nonNullable: true, validators: Validators.requiredTrue }),
  });

  submittedData: any = null;
  theme: 'light' | 'dark' = 'light';
  isDarkMode: boolean = false;
  get firstNameControl() { return this.form.get('firstname') as FormControl; }
  get lastNameControl() { return this.form.get('lastname') as FormControl; }
  get emailControl() { return this.form.get('email') as FormControl; }
  get phoneControl() { return this.form.get('phone') as FormControl; }
  get companyControl() { return this.form.get('company') as FormControl; }
  get titleControl() { return this.form.get('title') as FormControl; }
  get departmentControl() { return this.form.get('department') as FormControl; }
  get messageControl() { return this.form.get('message') as FormControl; }
  get humanControl() { return this.form.get('isHuman') as FormControl; }

  toggleTheme() {
    console.log('Toggling theme from', this.theme);
    this.theme = this.isDarkMode ? 'dark' : 'light';
    document.body.classList.toggle('dark-theme', this.theme === 'dark');
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submittedData = this.form.value;
    console.log('Form submitted:', this.submittedData);
    this.form.reset();
  }
  
}
