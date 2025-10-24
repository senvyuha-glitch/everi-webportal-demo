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
  

  fontForm = new FormGroup({
    fontStyle: new FormControl('', Validators.required),
  });

  beonButton = new FormGroup({
    buttonRadius: new FormControl('', Validators.required),
    buttonLabelTextType: new FormControl('', Validators.required),
    buttonLabelColor: new FormControl('', Validators.required),
  });

  beonForm = new FormGroup({
    fontForm: this.fontForm,
    beonButton: this.beonButton,
  });

  private configService = inject(ConfigService);
  submittedData: any = null;

  get fontStyleControl() {
    return this.beonForm.get('fontForm.fontStyle') as FormControl;}

  get buttonRadiusControl() {
    return this.beonForm.get('beonButton.buttonRadius') as FormControl;
  }

  get buttonLabelTextTypeControl() {
    return this.beonForm.get('beonButton.buttonLabelTextType') as FormControl;
  }

  get buttonLabelColorControl() {
    return this.beonForm.get('beonButton.buttonLabelColor') as FormControl;
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
