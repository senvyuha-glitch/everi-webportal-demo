import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicInput } from '../../../shared/dynamic-input/dynamic-input';
import { C } from '@angular/cdk/keycodes';
import { ConfigService } from '../../../shared/services/config-service';

@Component({
  selector: 'app-beon',
  imports: [CommonModule,FormsModule,ReactiveFormsModule,DynamicInput],
  templateUrl: './beon.html',
  styleUrl: './beon.scss'
})
export class Beon {
  beonForm = new FormGroup({
    fontStyle: new FormControl('', Validators.required),
  });
  private configService = inject(ConfigService);
  submittedData: any = null;

  get fontStyleControl() {
    return this.beonForm.get('fontStyle') as FormControl;
  }


  onSubmit() {
    if (this.beonForm.invalid) {
      this.beonForm.markAllAsTouched();
      return;
    }
    this.submittedData = this.beonForm.value;
    localStorage.setItem('fontFamily', JSON.stringify(this.submittedData));
    console.log('Form submitted:', this.submittedData);
    this.configService.loadConfig();
    this.beonForm.reset();
  }
}
