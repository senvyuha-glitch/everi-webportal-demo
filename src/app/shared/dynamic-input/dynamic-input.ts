import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import {
  FormControl,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-dynamic-input',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-input.html',
  styleUrl: './dynamic-input.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DynamicInput),
      multi: true,
    },
  ],
})
export class DynamicInput implements ControlValueAccessor {
  @Input() type: string = 'text';
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() options?: { label: string; value: string }[];
  @Input() formControl!: FormControl;

  value: any = '';
  disabled = false;

  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  handleChange(event: Event) {
    const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    this.value = target.value;
    console.log('DynamicInput value changed to:', this.value);
    this.onChange(this.value);
    this.onTouched();
  }

  getErrorMessage(): string | null {
    if (!this.formControl || this.formControl.valid || !this.formControl.touched) return null;

    if (this.formControl.errors?.['required']) return `${this.label ?? 'This field'} is required.`;
    if (this.formControl.errors?.['email']) return 'Please enter a valid email address.';
    if (this.formControl.errors?.['pattern']) return 'Invalid format.';
    if (this.formControl.errors?.['minlength']) {
      return `Minimum length is ${this.formControl.errors['minlength'].requiredLength}.`;
    }
    if (this.formControl.errors?.['maxlength']) {
      return `Maximum length is ${this.formControl.errors['maxlength'].requiredLength}.`;
    }

    return 'Invalid input.';
  }
}
