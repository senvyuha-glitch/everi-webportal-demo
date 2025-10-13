import { Component } from '@angular/core';
import { DynamicInput } from '../../../shared/dynamic-input/dynamic-input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  imports: [DynamicInput, CommonModule,ReactiveFormsModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss',
})
export class ContactUs {

  form = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    company: new FormControl(''),
    title: new FormControl(''),
    department: new FormControl(''),
    message: new FormControl(''),
    isHuman: new FormControl(false, { nonNullable: true, validators: Validators.requiredTrue })
  });

  submittedData: any = null;

  get firstNameControl(): FormControl {
    return this.form.get('firstname') as FormControl;
  }

  get lastNameControl(): FormControl {
    return this.form.get('lastname') as FormControl;
  }

  get emailControl(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get phoneControl(): FormControl {
    return this.form.get('phone') as FormControl;
  }

  get companyControl(): FormControl {
    return this.form.get('company') as FormControl;
  }

  get titleControl(): FormControl {
    return this.form.get('title') as FormControl;
  }
  
  get departmentControl(): FormControl {
    return this.form.get('department') as FormControl;
  }
  get messageControl(): FormControl {
    return this.form.get('message') as FormControl;
  }
  get humanControl(): FormControl {
    return this.form.get('isHuman') as FormControl;
  }
  onSubmit() {
    this.submittedData = this.form.value;
    console.log('Form submitted:', this.submittedData);
  }

  // onContactClick() {
  //   const email = this.emailControl.value;
  //   if (email) {
  //     alert(`Thank you for reaching out! We will contact you at ${email}.`);
  //     this.emailControl.reset();
  //   } else {
  //     alert('Please enter a valid email address.');
  //   }
  // }
}
